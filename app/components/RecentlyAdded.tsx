import Image from "next/image";
import { baseUrl } from '../constant/movie';
import { MovieCard } from "./MovieCard";
import getVieos from "../movies/videoUrl";
import getMovies from "../movies/recentlyAdded";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const apiKey = process.env.API_KEY;

export default async function RecentlyAdded() {

    const movies = await getMovies();
    const { results = [] } = movies;
    // console.log(results);

    // Sort by release date descending
    results.sort((a: { release_date: string }, b: { release_date: string }) =>
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );

    // Take the 10 recently added
    const latestReleases = results.slice(0, 10);

    const ids = latestReleases.map((movie: { id: number }) => movie.id);

    const allVideos = [];
    for (const id of ids) {
        const video = await getVieos(id);
        allVideos.push(...video.results);
    }

    const trailerVideos = allVideos.filter(video => video.type === 'Trailer');

    const youtubeURLs = trailerVideos.map(trailerVideo => `https://www.youtube.com/embed/${trailerVideo.key}`);

    // console.log(youtubeURLs);
    // https://www.youtube.com/embed


    return (
        <Carousel className="mt-8 mb-8">
            <CarouselContent className="-ml-5">
            {latestReleases.map((movie: { id: number; backdrop_path: any; poster_path: any; title: string; overview: string; release_date: string; }, index: number) => (
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
                                            movieID={movie?.id as number}
                                            overview={movie.overview}
                                            release_date={movie.release_date}
                                            watchListId={movie.id}
                                            youtubeURL={youtubeURLs[index]}
                                            watchList={latestReleases.length > 0}
                                            key={movie.id}
                                            duration={120}
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