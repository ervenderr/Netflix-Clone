import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";
import Popular from "../components/Popular";
import { CarouselSpacing } from "../components/Carousel";

export default function Homepage() {
    return (
        <div className="p-5 lg:p-0">
            <MovieVideo />
            <h1 className="text-3xl font-bold">Popular</h1>
            <Popular/>
            <h1 className="text-3xl font-bold">Recently added</h1>
            <RecentlyAdded />
        </div>
    )
}