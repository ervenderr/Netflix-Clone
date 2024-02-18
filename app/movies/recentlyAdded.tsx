const getMovies = async () => {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error("API key is missing.");
        return {
            notFound: true,
        };
    }

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=2&sort_by=popularity.desc&api_key=${apiKey}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

export default getMovies;



