import { useState } from "react";
import Filter from "./Filter";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";


const MovieWatch = () => {
    const [movies, setMovies]=useState([]);


    function getMovi({title, ott}){
            const newMovie={
                id:crypto.randomUUID(),
                title,
                ott,
                rating:null,
                watched:false,
            }

            setMovies([...movies, newMovie]);

    }
    

  function rateMovie(id, rating){
    setMovies(movies.map((movi)=>(movi.id==id?{...movi, rating}:movi)))
  }

  function toggleWatched(id){
        setMovies(movies.map((movi)=>movi.id===id?{...movi, watched:!movi.watched}:movi))
  }

  function deleteMovi(id){
    console.log(id);
    setMovies(movies.filter(movi=> movi.id !== id));
  }

    return (
        <div className="w-[80%] h-full bg-gray-700 m-auto">
            <Heading/>
            <MovieForm getMovi={getMovi}/>
            <Filter/>
            <MovieList 

            movies={movies}
            rateMovie={rateMovie} 
            toggleWatched={toggleWatched} 
            deleteMovi={deleteMovi}
            
            />
        </div>
    );
};

export default MovieWatch;