
import ReactStars from "react-stars";

import { useContext } from "react";
import UsersContext from "./context/UserContext";

const MovieItem = ({movie}) => {
  
const {rateMovie, toggleWatched, deleteMovi} = useContext(UsersContext);

    const ratingChange = (newRating)=>{
        rateMovie(movie.id, newRating);
        console.log(newRating);
    }

    return (
       <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md text-white">
            <span className={`flex-1 mr-4 ${movie.watched?"line-through text-gray-400":"text-white"}`}>{movie.title} on {movie.ott} {movie.rating && `${movie.rating}/5s`}</span>

            <div className={`flex gap-5`}>
                   <ReactStars
                    count={5}
                    value={movie?.rating}
                    onChange={ratingChange}
                    size={24}
                    color2={"#ffd700"}
                   /> 
                   <button
                   className="px-2 py-1 text-sm bg-green-600 hover:bg-green-700 text-white" onClick={()=>toggleWatched(movie.id)}>
                                {movie.watched?"Unwatch":"Watch"}
                   </button>

                   <button
                   className="px-2 py-1 text-sm bg-red-600 hover:bg-red-700 text-white" onClick={()=>deleteMovi(movie.id)}>
                                Delete
                   </button>
            </div>
       </li>
    );
};


export default MovieItem;