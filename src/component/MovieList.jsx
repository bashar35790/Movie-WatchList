import MovieItem from "./MovieItem";
import PropTypes from "prop-types";

const MovieList = ({movies, rateMovie, toggleWatched, deleteMovi}) => {
    return (
        <div className="mt-4">
        {movies.length ==0?(
            <p className="text-center text-gray-400">No movies in your watchlist. Add some!</p>
        ):(
        <ul className="space-y-3">
            {
              movies.map((movi)=>(<MovieItem 
                key={movi.id}
                rateMovie={rateMovie} 
                toggleWatched={toggleWatched} 
                deleteMovi={deleteMovi}
                movi={movi}
                
                />))
            }
        </ul>
    )}
        

        </div>
    );
};

MovieList.propTypes ={
    movies:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            ott:PropTypes.string.isRequired,
            watched: PropTypes.bool.isRequired,
            rating:PropTypes.number.isRequired,
        })
    ).isRequired,
    rateMovie:PropTypes.func.isRequired,
    toggleWatched:PropTypes.func.isRequired,
    deleteMovi:PropTypes.func.isRequired,
};

export default MovieList;