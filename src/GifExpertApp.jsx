import {useState} from 'react';
import {Box} from '@mui/system';
// import {Button} from '@mui/material';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
  // Almacenando las categorias con hook.
  const [categories, setCategories] = useState([]);

  // Agregando categorias.
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, 'Hacking']);
  };

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp👽</h1>

      {/* Input */}
      <Box sx={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <AddCategory
          // setCategories={setCategories}
          onNewCategory={onAddCategory}
        />

        {/* <Button onClick={onAddCategory} variant="outlined">
          Search
        </Button> */}
      </Box>

      {/* Listado de gifs */}
      {/* Renderizando el arreglo de categories */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif items */}
    </>
  );
};
