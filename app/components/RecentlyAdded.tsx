import Image from "next/image";
import { baseUrl } from '../constant/movie';
import { MovieCard } from "./MovieCard";

const getMovies = async () => {
    const apiKey = process.env.API_KEY;

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

export default async function RecentlyAdded() {
    const movies = await getMovies();
    const { results = [] } = movies;


    // Sort by release date descending
    results.sort((a, b) =>
        new Date(b.release_date) - new Date(a.release_date)
    );

    // Take the 5 most recent
    const latestReleases = results.slice(0, 5);

    console.log(latestReleases)
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {latestReleases.map(movie => (
                <div key={movie.id} className="relative h-48">
                    <Image
                        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={500}
                        className="rounded-sm absolute w-full h-full"
                    />
                    <div className="relative h-60 w-full z-10 transform transition duration-300 hover:scale-125 opacity-0 hover:opacity-100">
                        <div className="bg-gradient-to-b from-transparent via-black/50 to-black w-full h-full z-10 rounded-lg flex items-center justify-center border">
                            <Image
                                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                                alt={movie.title}
                                width={800}
                                height={800}
                                className="rounded-sm absolute w-full h-full -z-10 "
                            />

                            <MovieCard title={movie.title} movieID={movie.id} overview={movie.overview} poster_path={movie.poster_path} release_date={movie.release_date} account_id={movie.id} youtubeURL={movie.youtubeURL} watchList={false} />
                        </div>
                        <video
                            src={`https://api.themoviedb.org/3/movie/${movie.id}videos?api_key=###&language=en-US`}
                            // poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            autoPlay
                            muted
                            loop
                            className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-50">
                        </video>
                    </div>
                </div>
            ))}
        </div>
    );
}