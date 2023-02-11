import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export const requests = {
  fetchTrends$: ajax(
    `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US`
  ),
  fetchNetflixOriginals$: ajax(
    `${baseUrl}/discover/tv?api_key=${apiKey}&with_networks=213`
  ),
  fetchTopRated$: ajax(
    `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`
  ),
  fetchActionMovies$: ajax(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`),
  fetchComedyMovies$: ajax(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=35`),
  fetchHorrorMovies$: ajax(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=27`),
  fetchRomanceMovies$: ajax(
    `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=10749`
  ),
  fetchDocumentaries$: ajax(
    `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=99`
  ),
};
