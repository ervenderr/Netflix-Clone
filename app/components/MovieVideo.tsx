import prisma from "../utils/db";
import getMovies from "../movies/page";
import { Button } from "@/components/ui/button";



export default async function MovieVideo() {

    const movies = await getMovies();

    const firstMovie = movies.results[0];

    return (
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">

            <video
                src="https://utfs.io/f/061646fa-5478-48ac-9eb3-da8a89b0062a-d16d26.mp4"
                poster={`https://image.tmdb.org/t/p/w500${firstMovie.poster_path}`}
                autoPlay
                muted
                loop
                className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-50">
            </video>

            <div className="absolute w-[90%] lg:w-[40%] mx-auto">
                <h1 className="text-4xl lg:text-5xl md:text-6xl font-bold">{firstMovie.title}</h1>
                <p className="text-gray-400 text-lg mt-5 line-clamp-3">{firstMovie.overview}</p>
                <div className="flex gap-x-3 mt-4">
                    <Button variant="">Play now</Button>
                    <Button variant="">Learn More</Button>
                </div>
            </div>

        </div>
    );
}