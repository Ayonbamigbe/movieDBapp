import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w185";

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};



const MovieCard = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img 
            src={
                poster_path 
                ? IMAGE_API + poster_path 
                : "https://cdn.vox-cdn.com/thumbor/umGl2f4_VNoKzFS6R2Rdr03Z-L4=/0x0:3000x2000/1570x883/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60452929/movie_trailer_bracket_editing_getty_ringer.0.jpg"
            } 
            alt = {title} 
        />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
                `tag ${setVoteClass(vote_average)}`
                }>
                {vote_average}
            </span>
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default MovieCard;