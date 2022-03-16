import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieapi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

function Home() {
    useEffect(() => {
        const movieText = "black";
        const fetchMovies = async () => {
            const response = await movieapi.get(
                `?apikey=${APIKey}&s=${movieText}&types=movie`
            )
            .catch((err) => {
                console.log("Err : ", err);
            });
            console.log("The response from API response ", response);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
}

export default Home;
