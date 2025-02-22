import PropTypes from "prop-types";
import ReactStars from "react-stars";
const MovieItem = ({movi, rateMovie, toggleWatched, deleteMovi}) => {

    const ratingChange = (newRating)=>{
        rateMovie(movi.id, newRating);
        console.log(newRating);
    }
    return (
       <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg shadow-md text-white">
            <span className={`flex-1 mr-4 ${movi.watched?"line-through text-gray-400":"text-white"}`}>{movi.title} on {movi.ott} {movi.rating && `${movi.rating}/5s`}</span>

            <div className={`flex gap-5`}>
                   <ReactStars
                    count={5}
                     value={movi?.rating}
                    onChange={ratingChange}
                    size={24}
                    color2={"#ffd700"}
                   /> 
                   <button
                   className="px-2 py-1 text-sm bg-green-600 hover:bg-green-700 text-white" onClick={()=>toggleWatched(movi.id)}>
                                {movi.watched?"Unwatch":"Watch"}
                   </button>

                   <button
                   className="px-2 py-1 text-sm bg-red-600 hover:bg-red-700 text-white" onClick={()=>deleteMovi(movi.id)}>
                                Delete
                   </button>
            </div>
       </li>
    );
};

MovieItem.propTypes={
    movi: PropTypes.shape(
        {
            id:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            ott:PropTypes.string.isRequired,
            watched:PropTypes.bool.isRequired,
        }
    ).isRequired,
     rateMovie:PropTypes.func.isRequired,
     toggleWatched:PropTypes.func.isRequired,
     deleteMovi: PropTypes.func.isRequired,
};

export default MovieItem;