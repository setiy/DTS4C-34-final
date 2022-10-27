import { CardMedia} from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { Link } from 'react-router-dom';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ tv }) => {
  return (
    <Link to={`/tv/${tv.id}`}>
      <Card id={tv.id} sx={{ display: 'flex', width: 225, ml: 3, mt: 2}}>
        <CardMedia
          component="img"
          sx={{ width: 225, height: 500 }}
          image={`${BASE_IMAGE_URL}${tv.poster_path}`}
          alt="TV poster"
        />
      </Card>
    </Link>
  );
}

export default MovieCard;