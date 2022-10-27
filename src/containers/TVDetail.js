import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const TVDetail = () => {
    let { id } = useParams();

    const [tvDetail, setTVDetail] = useState({});
    
    useEffect(() => {
        const fetchTV = async () => {
            try {
                const fetchedTV = await tmdb.get(`tv/${id}`);
                setTVDetail(fetchedTV.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchTV();
    }
    , [id]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img width={500} src={`${BASE_IMAGE_URL}${tvDetail.poster_path}`} alt="TV poster" />
                <Typography variant="h4" component="div">
                    {tvDetail.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div">
                    {tvDetail.overview}
                </Typography>
            </Box>
        </Box>
    );
}

export default TVDetail;