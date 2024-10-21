import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGUzOWU1OTQ2MjU0ZWJjYjNiNTNjZDU1MDE0NjlhZCIsIm5iZiI6MTcyOTM3MDMxOC42MjA5MzYsInN1YiI6IjY3MTQxNDkwNjUwMjQ4YjlkYjYyM2U5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TAEfmDg4cWglPq451GQgOT8iz1hd0rl_bYUQkmIcNcQ'
  },
  params: {
    include_adult: false,
    language: 'en-US',
  }
};

// const pattern = axios.create({
//     BASE_URL: 'https://api.themoviedb.org/3',
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGUzOWU1OTQ2MjU0ZWJjYjNiNTNjZDU1MDE0NjlhZCIsIm5iZiI6MTcyOTM3MDMxOC42MjA5MzYsInN1YiI6IjY3MTQxNDkwNjUwMjQ4YjlkYjYyM2U5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TAEfmDg4cWglPq451GQgOT8iz1hd0rl_bYUQkmIcNcQ',
//     },
//   });

//   const axiosOptions = {
//     params: {
//         include_adult: false,
//         language: 'en-US', 
//     }
// }

export const fetchTrendingMovies = async () => {
  try{
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
fetchTrendingMovies();

export const fetchKeywordMovies = async (query) => {
  const searchOptions = { ...options, params: { ...options.params, query } };
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, searchOptions);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails  = async (movie_id) => {
  try{
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}`, options);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchMovieCredits = async (movie_id) => {
    try{
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}/credits`, options);
    console.log(response.data.cast)
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}

export const fetchMovieReviews = async (id) => {
  try{
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
    console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}  