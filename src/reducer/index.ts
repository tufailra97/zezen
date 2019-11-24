import { combineReducers } from 'redux';
import movie from './movies';
import search from './search';
import series from './series';
import people from './people';
import home from './home';

export default combineReducers({
  movies: movie,
  search: search,
  series: series,
  people: people,
  home: home
});
