import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Media = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} >
            {Array.from(Array(3)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box sx={{ marginRight: 2, my: 5 }}>
                        <Skeleton variant="rectangular"  height={225} sx={{ bgcolor: '#1A2027' }} />
                        <Skeleton width="60%" variant="text" sx={{ fontSize: '1.5rem', bgcolor: '#1A2027' }} />
                    </Box>
                </Grid>
            ))}
        </Grid>
        </Box>
    )
}

export default Media
