// import axios from "axios"
import { apiKey } from "@/constants/key"
import axios from "axios"


// //end points
const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMovies =apiBaseUrl+ '/trending/movie/day?api_key=' + apiKey
const upcomingMovies =apiBaseUrl+ '/movie/upcoming?api_key=' + apiKey
const topRatedMovies =apiBaseUrl+ '/movie/top_rated?api_key=' + apiKey

const movieDetails =id=> apiBaseUrl+ '/movie/'+id+'?api_key=' + apiKey
const movieCredits =id=> apiBaseUrl+ '/movie/'+id+'/credits?api_key=' + apiKey
const movieSimilar =id=> apiBaseUrl+ '/movie/'+id+'/similar?api_key=' + apiKey

const searchMovie =query=> apiBaseUrl+ '/search/movie?query='+query+'&include_adult=false&language=en-US&page=1&api_key=' + apiKey
  
const personDetails =id=> apiBaseUrl+ '/person/'+id+'?api_key=' + apiKey
const personMovieCredits =id=> apiBaseUrl+ '/person/'+id+'/movie_credits?api_key=' + apiKey

export const image500 =(path)=>  "https://image.tmdb.org/t/p/w500"+path
export const image342 =(path)=>  "https://image.tmdb.org/t/p/w342"+path
export const image185 =(path)=>  "https://image.tmdb.org/t/p/w185"+path

export const getTrendingMovies = () => {
  return axios.get(trendingMovies)
}

export const getUpcomingMovies = () => {
  return axios.get(upcomingMovies)
}

export const getTopRatedMovies = () => {
  return axios.get(topRatedMovies)
}

export const getMovieDetails = (id) => {
  return axios.get(movieDetails(id))
}

export const getMovieCredits = (id) => {
  return axios.get(movieCredits(id))
}

export const getMovieSimilar = (id) => {
  return axios.get(movieSimilar(id))
}

export const getPersonDetails = (id) => {
  return axios.get(personDetails(id))
}

export const getPersonMovieCredits = (id) => {
  return axios.get(personMovieCredits(id))
}

export const getSearchMovieByQuery = (query) => {
  return axios.get(searchMovie(query))
}