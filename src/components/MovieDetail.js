import PropTypes from "prop-types";


function MovieDetail({like,downloadCount,rating,title,genres,coverImg,runtime,summary}){
 return  (<div>
 <img src={coverImg} alt={title}/>
 <h2>{title}</h2>
 <h4>runtime :{runtime}</h4>

 <h6>Like:{like} Rating:{rating} Download:{downloadCount}</h6>
 <ul>
   {genres.map((g)=><li key={g}>{g}</li>)}
 </ul>
 <p>{summary}</p>
 </div>);
}

MovieDetail.prototype = {
    like: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    downloadCount: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default MovieDetail; 