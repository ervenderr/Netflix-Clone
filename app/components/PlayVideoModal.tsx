import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface iAppProps {
    title: string;
    overview: string;
    state: boolean;
    changeState: any;
    youtubeURL: string;
    release_date: number;
    age: number;
    duration: number;
}

export default function PlayVideoModal({
    changeState,
    title,
    overview,
    state,
    youtubeURL,
    release_date,
    age,
    duration
}: iAppProps) {
    return (
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            <DialogContent className="sm:max-w-[425px] lg:max-w-screen-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">{title}</DialogTitle>
                    <DialogDescription className="line-clamp-3 text-gray-400">{overview}</DialogDescription>
                    <div className="flex gap-x-2 items-center">
                        <p className="text-sm font-normal">{release_date}</p>
                        <p className="text-sm font-normal border py-0.5 px-1 border-gray-200 rounded">{age}+</p>
                        <p className="text-sm font-normal">{duration} min</p>
                    </div>
                </DialogHeader>
                <iframe src={youtubeURL} height={"315"} width={"100%"}>

                </iframe>
            </DialogContent>
        </Dialog>
    )
}