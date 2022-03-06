import { useState,useEffect } from "react";
import {useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail.js";

function Detail(){
    const [loading,setLoading] =useState(true);
    const [movie,setMovie] = useState({});
    
    const {id} =useParams();
    const getMovie = async () =>{
        const json = await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
       getMovie();
    },[])
return (
    <div>
        {loading? <h1>Loading...</h1>:
        <MovieDetail like={movie.like_count}
        rating ={movie.rating}
        downloadCount={movie.download_count}
        genres ={movie.genres}
        runtime ={movie.runtime}
        title ={movie.titel}
        summary ={movie.description_full}
        coverImg={movie.large_cover_image}
        />}

    </div>
)
}
export default Detail;
