"use client"

import { Button } from "@/components/ui/button"
import { Info, Play } from "lucide-react"
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
    title: string
    overview: string
    state: boolean
    changeState: any
    youtubeURL: string
    release_date: number
    age: number
    duration: number
}

export default function MovieButtons({
    title,
    overview,
    state,
    changeState,
    youtubeURL,
    release_date,
    age,
    duration
}: iAppProps) {
    const [open, setOpen] = useState(false);
    return (
        <>
        <Button onClick={() => setOpen(true)} variant="default" className="font-bold text-lg"><Play strokeWidth={3} className="mr-3"/>Play</Button>
        <Button onClick={() => setOpen(true)} variant="secondary" className="font-bold text-lg"><Info className="mr-3"/>More Info</Button>

        <PlayVideoModal state={open} changeState={setOpen} title={title} overview={overview} youtubeURL={youtubeURL} release_date={release_date} age={age} duration={duration}/>
        </>
    )
}