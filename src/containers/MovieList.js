import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard';
import TVCard2 from '../components/TVCard2';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [tvs, setTvs] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        const fetchTvShows = async () => {
            try {
                const fetchedTvShows = await tmdb.get("trending/tv/week");
                setTvs(fetchedTvShows.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTvShows();
        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
            mb: 5
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                mt: 5,
            }}>
                <Typography variant="h4" component="div">
                    Trending TV Shows
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    tvs.map(tv => (
                        <TVCard2 key={tv.name} tv={tv}></TVCard2>
                    ))
                }
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                mt: 5,
            }}>
                <Typography variant="h4" component="div">
                    Trending Movies
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    movies.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Box>
        </Box>
    );
}

export default MovieList;
