
import { useContext } from "react";
import MovieItem from "./MovieItem";
import UsersContext from "./context/UserContext";

const MovieList = () => {
    
    const {movies, filter} = useContext(UsersContext);
    
    const btnFilltering=(movie) =>{
        if (filter == "watched")
            return movie.watched == true;
        if (filter == "unwatched")
            return movie.watched == false;
        else
            return true;
    }
    

    return (
        <div className="mt-4 p-4">
        {movies.length ==0?(
            <p className="text-center text-gray-400">No movies in your watchlist. Add some!</p>
        ):(
        <ul className="space-y-3">
            {
              movies.filter((movie)=> btnFilltering(movie)).map((movie)=>(<MovieItem 
                key={movie.id}  
                movie={movie}              
                />))
            }
        </ul>
    )}
        

        </div>
    );
};



export default MovieList;