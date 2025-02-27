
import Filter from "./Filter";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import UsersContext from "./context/UserContext"
import { useState } from "react";


const MovieWatch = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("all");

  function getMovi({ title, ott }) {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };

    setMovies([...movies, newMovie]);
  }

  function rateMovie(id, rating) {
    setMovies(
      movies.map((movi) => (movi.id == id ? { ...movi, rating } : movi))
    );
  }

  function toggleWatched(id) {
    setMovies(
      movies.map((movi) =>
        movi.id === id ? { ...movi, watched: !movi.watched } : movi
      )
    );
  }

  function deleteMovi(id) {
    console.log(id);
    setMovies(movies.filter((movi) => movi.id !== id));
  }


    return (

        <UsersContext.Provider value={{ getMovi,setFilter, filter, movies, rateMovie, toggleWatched, deleteMovi}} >

         <div className="w-[80%] h-full bg-gray-700 m-auto">

            <Heading/>
            <MovieForm />
            <Filter />
            <MovieList/>

         </div>

        </UsersContext.Provider>
    );
};

export default MovieWatch;