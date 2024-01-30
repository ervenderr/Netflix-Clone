import prisma from "../utils/db";
import getMovies from "../movies/page";
import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";



export default async function MovieVideo() {

    const movie = await getMovies();
    // console.log(movie.id);

    return (
        <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">

            <video
                src="https://utfs.io/f/aebcc6cb-c7e5-445d-a0e4-11ac0dd6db1b-80261n.mp4"
                poster={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                autoPlay
                muted
                loop
                className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-50">
            </video>

            <div className="absolute w-[90%] lg:w-[40%] mx-auto">
                <h1 className="text-4xl lg:text-5xl md:text-6xl font-bold">{movie.title}</h1>
                <p className="text-gray-400 text-lg mt-5 line-clamp-3">{movie.overview}</p>
                <div className="flex gap-x-3 mt-5">
                    <Button variant="default" className="font-bold text-lg"><Play strokeWidth={3} className="mr-3"/>Play</Button>
                    <Button variant="secondary" className="font-bold text-lg"><Info className="mr-3"/>More Info</Button>
                </div>
            </div>

        </div>
    );
}