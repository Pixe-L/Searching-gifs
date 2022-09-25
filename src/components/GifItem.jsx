import {Box, Card, CardContent, CardMedia, Grid} from '@mui/material';
import {height} from '@mui/system';

export const GifItem = ({title, url}) => {
  return (
    <Box sx={{flexGrow: 2, gap: '10px'}}>
      <Grid>
        <Card sx={{bgcolor: '#411153', color: 'whitesmoke', textAlign: 'center'}}>
          <CardMedia component="img" image={url} alt="gif"></CardMedia>
          <CardContent>
            <p>{title}</p>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};
