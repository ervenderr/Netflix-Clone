"use client";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle, PlayCircleIcon } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";
import getVieos from "../movies/videoUrl";

interface MovieCardProps {
    title: string;
    movieID: string;
    overview: string;
    release_date: string;
    watchList: boolean;
    watchListId: string;
    youtubeURL: string;
}

const apiKey = process.env.API_KEY;


export function MovieCard({ title, movieID, overview, release_date, watchList, watchListId, youtubeURL }: MovieCardProps) {

    const year = parseInt(release_date.slice(0, 4));
    const [open, setOpen] = useState(false);
    // const key = getVieos(movieID);
    // console.log(key);

    return (
        <>
            <button className="mb-6" onClick={() => setOpen(true)}>
                <PlayCircleIcon className="w-20 h-20" strokeWidth={0.75}/>
            </button>

            <div className="right-2 top-2 absolute z-10">

                {watchList ? <form action="">
                    <Button variant={"outline"} size="icon" className="">
                        <Heart className="w-4 h-4 text-red-500" />
                    </Button>
                </form> :
                    <Button variant={"outline"} size="icon" className="">
                        <Heart className="w-4 h-4" />
                    </Button>}
            </div>

            <div className="p-5 absolute bottom-0 left-0">
                <h1 className="text-lg font-bold line line-clamp-1">{title}</h1>
                <div className="flex gap-x-2 items-center">
                    <p className="text-sm font-normal">{year}</p>
                    <p className="text-sm font-normal border py-0.5 px-1 border-gray-200 rounded">12+</p>
                    <p className="text-sm font-normal">{'120 min'}</p>
                </div>
                <p className="text-sm font-light text-gray-200 line line-clamp-1">{overview}</p>
            </div>
            <PlayVideoModal 
            title={title} 
            key={movieID} 
            overview={overview} 
            state={open} 
            changeState={setOpen} 
            youtubeURL={youtubeURL}
            release_date={year}
            age={12}
            duration={120}/>

        </>
    )
}