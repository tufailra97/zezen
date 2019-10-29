import axios from 'axios';
import { Dispatch } from 'redux';
import {
  REQUEST_FETCH,
  FETCH_FAILED,
  MOVIE_GET_NOW_PLAYING,
  MOVIE_GET_MOVIE_DETAILS,
  MOVIE_GET_RECCOMENDATION
} from 'types';
import { IMovieResponse, IMovieDetailsResponse } from 'interfaces';

/**
 * Get a list of movies in theatres.
 * @param page
 */
export const getNowPlaying = (page: number) => async (dispatch: Dispatch) => {
  dispatch({ type: REQUEST_FETCH });
  const url = `${process.env.REACT_APP_TMDB_END_POINT}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=${page}`;

  const request = await axios.get(url);
  const data: IMovieResponse = request.data;
  const status = request.status;

  if (status === 200) {
    return dispatch({
      type: MOVIE_GET_NOW_PLAYING,
      movies: data.results,
      totalPage: data.total_pages,
      totalResults: data.total_results
    });
  }
  return dispatch({
    type: FETCH_FAILED
  });
};

/**
 * Get the primary information about a movie
 * @param id
 */
export const getMovieDetails = (id: number) => async (dispatch: Dispatch) => {
  dispatch({ type: REQUEST_FETCH });
  const url = `${process.env.REACT_APP_TMDB_END_POINT}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`;

  const request = await axios.get(url);
  const data: IMovieDetailsResponse = request.data;
  const status = request.status;

  if (status === 200) {
    return dispatch({
      type: MOVIE_GET_MOVIE_DETAILS,
      movie: data
    });
  }
  return dispatch({
    type: FETCH_FAILED
  });
};

/**
 * Get a list of recommended movies for a movie
 * @param id
 */
export const getRecommendations = (id: number) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: REQUEST_FETCH });
  const url = `${process.env.REACT_APP_TMDB_END_POINT}/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`;

  const request = await axios.get(url);
  const data: IMovieResponse = request.data;
  const status = request.status;

  if (status === 200) {
    return dispatch({
      type: MOVIE_GET_RECCOMENDATION,
      movies: data.results,
      totalPage: data.total_pages,
      totalResults: data.total_results
    });
  }
  return dispatch({
    type: FETCH_FAILED
  });
};
