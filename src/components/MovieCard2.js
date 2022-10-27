import { CardMedia} from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { Link } from 'react-router-dom';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard2 = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card id={movie.id} sx={{ display: 'flex', width: 225, ml: 3, mt: 2}}>
        <CardMedia
          component="img"
          sx={{ width: 225, height: 500 }}
          image={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt="Movie poster"
        />
      </Card>
    </Link>
  );
}

export default MovieCard2;