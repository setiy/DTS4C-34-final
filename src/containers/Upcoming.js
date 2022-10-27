import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import tmdb from '../apis/tmdb';
import MovieCard2 from '../components/MovieCard2';

const Upcoming = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [moviesReady, setMoviesReady] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("movie/upcoming");
                setMovies(fetchedMovies.data.results);
                setMoviesReady(true);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    useEffect(() => {
        if (!moviesReady) return;
        const sortMovies = (type) => {
            if (type === 'asc') {
                const sorted = [...movies].sort((a, b) => a.vote_average - b.vote_average);
                setMovies(sorted);
            }
            if (type === 'desc') {
                const sorted = [...movies].sort((a, b) => b.vote_average - a.vote_average);
                setMovies(sorted);
            }
        }

        sortMovies(queryParams.get('sort'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, moviesReady]);

    const setSortParam = (type) => {
        queryParams.set("sort", type);
        setQueryParams(queryParams);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
            mb: 5
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                Sort by Rating
                <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => setSortParam("asc")}
                >
                    Asc
                </Button>
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setSortParam("desc")}
                >
                    Desc
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: 5,
            }}>
                <Typography variant="h2" component="div">
                    Upcoming Movies
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    movies.map(movie => (
                        <MovieCard2 key={movie.title} movie={movie}></MovieCard2>
                    ))
                }
            </Box>
        </Box>
    );
}

export default Upcoming;
