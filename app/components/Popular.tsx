import Image from "next/image";
import { baseUrl } from '../constant/movie';
import { MovieCard } from "./MovieCard";
import getVieos from "../movies/videoUrl";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const apiKey = process.env.API_KEY;
const getMovies = async () => {

    if (!apiKey) {
        console.error("API key is missing.");
        return {
            notFound: true,
        };
    }

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

export default async function Popular() {

    const movies = await getMovies();
    const { results = [] } = movies;

    // Sort by release date descending
    results.sort((a: { release_date: string | number | Date; }, b: { release_date: string | number | Date; }) =>
        new Date(b.release_date) - new Date(a.release_date)
    );

    // Take the 5 most popular
    const latestReleases = results.slice(0, 10);

    const ids = latestReleases.map((movie: { id: any; }) => movie.id);

    const allVideos = [];
    for (const id of ids) {
    const video = await getVieos(id); 
    allVideos.push(...video.results);
    }

const trailerVideos = allVideos.filter(video => video.type === 'Trailer');

const youtubeURLs = trailerVideos.map(trailerVideo => `https://www.youtube.com/embed/${trailerVideo.key}`);

    console.log(youtubeURLs);
    // https://www.youtube.com/embed


    return (
        <Carousel className="mt-8 mb-8">
            <CarouselContent className="-ml-5">
                {latestReleases.map((movie: { id: string; }[], index: string | number) => (
                    <CarouselItem key={movie.id} className="md:basis-1/2 lg:basis-1/4 pl-2">
                        <Card className="border-0 p-0">
                            <CardContent className="p-0 relative">
                                <Image
                                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                                    alt={movie.title}
                                    width={500}
                                    height={500}
                                    className="rounded-sm absolute w-full h-full"
                                />
                                <div className="relative h-60 w-full z-10 transform transition duration-300 opacity-0 hover:opacity-100">
                                    <div className="bg-gradient-to-b from-transparent via-black/50 to-black w-full h-full z-10 rounded-lg flex items-center justify-center border">
                                        <MovieCard
                                            title={movie.title}
                                            movieID={movie.id}
                                            overview={movie.overview}
                                            release_date={movie.release_date}
                                            watchListId={movie[0]?.id}
                                            youtubeURL={youtubeURLs[index]}
                                            watchList={movie.length > 0 ? true : false}
                                            key={movie.id}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}