
interface MovieCardProps {
    title: string;
    movieID: string;
    overview: string;
    poster_path: string;
    release_date: string;
    watchList: boolean;
    account_id: string;
    youtubeURL: string;
}

export function MovieCard({title, movieID, overview, poster_path, release_date, watchList, account_id, youtubeURL} : MovieCardProps) {
    return <h1 className="">MovieCard</h1>
}