import { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../redux/movies/movieSlice";

function Home() {
    const dispatch = useDispatch();
    const movieText = "transformers";
    const showText = "moon"

    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    }, [dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
}

export default Home;
