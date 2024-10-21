import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { fetchKeywordMovies } from '../api';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) =>{
    try{
      const results = await fetchKeywordMovies(query);
      setMovies(results);
    } catch(error){
      console.log(error);
    }
  }

  return (
   <>
   <SearchBar onSubmit={handleSearch}/>
   {movies && <MovieList movies={movies} />}
   </>
  )
}

export default MoviesPage