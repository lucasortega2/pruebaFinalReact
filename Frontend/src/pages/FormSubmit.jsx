import { Grid } from '@mui/material';
import ListOfBooks from '../components/ListOfBooks';
import FormSubmitBook from '../components/FormSubmitBook';
const FormSubmit = () => {
  return (
    <>
      <Grid container>
        <ListOfBooks />
        <FormSubmitBook isEdit={false} />
      </Grid>
    </>
  );
};

export default FormSubmit;
