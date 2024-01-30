const getVieos = async (key: any) => {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error("API key is missing.");
        return {
            notFound: true,
        };
    }

    const res = await fetch(`https://api.themoviedb.org/3/movie/${key}/videos?api_key=${apiKey}&language=en-US`);
    
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    
    return res.json();
};

export default getVieos;

