import { CardContent, CardMedia, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { Link } from 'react-router-dom';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} sx={{textDecoration: 'none', color: 'white'}}>
      <Card id={movie.id} sx={{ width: 300, height: 310, ml: 3, mt: 2, textDecoration: 'none'}}>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 225, textDecoration: 'none' }}
          image={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
          alt="Movie poster"
        />
        <CardContent sx={{textDecoration: 'none'}}>
          <Typography variant="h5" component="div" sx={{textDecoration: 'none', color: 'white'}}>
            {movie.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default MovieCard;