import { useEffect, useState } from 'react'
import { fetchMovieDetails } from '../api';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieById();
    
  }, [id]);

  const goBack = () => navigate(location.state?.from || '/');

  return (
    <div>
      <button type='button' onClick={goBack}>Go back</button>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Score: {Math.round(movie.popularity)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres?.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <Link state={{ from: location.state?.from }} to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link state={{ from: location.state?.from }} to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;