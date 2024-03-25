import { Box, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { bookContext } from '../contexts/bookContext';
const InputFilter = () => {
  const { filter, handleFilter } = useContext(bookContext);
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <>
      <Box>
        <TextField
          autoComplete="off"
          onChange={handleChange}
          value={filter}
          size="small"
          helperText="Busque un libro"
          id="book"
          label="book"
          variant="outlined"
        ></TextField>
      </Box>
    </>
  );
};

export default InputFilter;
