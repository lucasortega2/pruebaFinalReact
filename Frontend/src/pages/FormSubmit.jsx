import { Box, Grid } from '@mui/material';
import ListOfBooks from '../components/ListOfBooks';
import FormSubmitBook from '../components/FormSubmitBook';
import ButtonToHome from '../components/ButtonToHome';
import SimpleMediaQuery from '../hooks/useMediaQuery';

const FormSubmit = () => {
  const matches = SimpleMediaQuery('md');
  return (
    <>
      <Grid container flexDirection="column">
        <ButtonToHome />
        <Box display="flex" flexDirection={!matches && 'column'}>
          <ListOfBooks />
          <FormSubmitBook isEdit={false} />
        </Box>
      </Grid>
    </>
  );
};

export default FormSubmit;
