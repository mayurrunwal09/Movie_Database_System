import { configureStore } from '@reduxjs/toolkit';
import actorSlice from './Slices/Actor/actorSlice';
import directorSlice from './Slices/Director/directorSlice';
import reviewerSlice from './Slices/Reviewer/reviewerSlice';
import movieSlice from './Slices/Movie/movieSlice';
import genresSlice from './Slices/Genres/genresSlice';
import moviecastSlice from './Slices/MovieCast/moviecastSlice';
import ratingSlice from './Slices/Rating/ratingSlice';
import movieDirectionSlice from './Slices/MovieDirection/movieDirectionSlice';
import moviegenresSlice from './Slices/MovieGenres/moviegenresSlice';

const store = configureStore({
  reducer: {
    actor: actorSlice,
    director: directorSlice,
    reviewer: reviewerSlice,
    movie: movieSlice,
    genres: genresSlice,
    moviecast : moviecastSlice,
    rating: ratingSlice,
    moviedir: movieDirectionSlice,
    moviegenres : moviegenresSlice,
  },
});

export default store;