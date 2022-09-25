import {TextField} from '@mui/material';
import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChanged = ({target}) => {
    setInputValue(target.value);
    // console.log(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Validando para que no mande nada y no se siga ejecutando la función.
    if (inputValue.trim().length <= 1) {
      return;
    }

    // Insertando nuevas categorias
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        sx={{width: '100%'}}
        id="outlined-basic"
        label="¡SEARCH YOUR GIFS!👾"
        variant="outlined"
        onChange={onInputChanged}
        value={inputValue}
      />
    </form>
  );
};
