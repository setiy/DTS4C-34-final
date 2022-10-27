import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieDetail = () => {
    let { id } = useParams();

    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const fetchedMovie = await tmdb.get(`movie/${id}`);
                setMovieDetail(fetchedMovie.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovie();
    }, [id]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img width={500} src={`${BASE_IMAGE_URL}${movieDetail.poster_path}`} alt="Movie poster" />
                <Typography variant="h4" component="div">
                    {movieDetail.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {new Date(movieDetail.release_date).getFullYear()}
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div">
                    {movieDetail.overview}
                </Typography>
            </Box>
        </Box>
    );
}

export default MovieDetail;