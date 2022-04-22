import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncMovieOrShowDetail } from "../../redux/movies/movieSlice";

function MovieDetail() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.movies.selectMovieOrShow)
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    }, [dispatch, imdbID])
    return <div>MovieDetail</div>;
}

export default MovieDetail;
