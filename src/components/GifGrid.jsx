import {Grid} from '@mui/material';
import {GifItem} from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>⭐ {category} ⭐</h3>

      {isLoading && <h2>Loading...</h2>}

      <Grid container gap={3}>
        {images.map(({id, title, url}) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </Grid>
    </>
  );
};
