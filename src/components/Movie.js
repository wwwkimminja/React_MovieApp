
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './movie.css';

function Movie({id,coverImg,title,genres}){

 return  (
 <div>
     <div class="movie">
      <img src={coverImg} alt={title}/>
        <div class="movie__rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          </div>
      <h5><Link to={`/movie/${id}`}>{title}</Link></h5>
     </div>
   
    {/*
    <ul>
      {genres.map((g)=><li key={g}>{g}</li>)}
    </ul>
    */}
 </div>
 );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie; 