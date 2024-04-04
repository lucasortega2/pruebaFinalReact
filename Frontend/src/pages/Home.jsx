import {
  Box,
  Button,
  Container,
  Grid,
  ListItemText,
  Typography,
} from '@mui/material';
import CardComponent from '../components/CardComponent';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';
import InputFilter from '../components/InputFilter';
import { NavLink } from 'react-router-dom';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import SimpleMediaQuery from '../hooks/useMediaQuery';

const Home = () => {
  const matches = SimpleMediaQuery('sm');
  const { filteredBooks } = useContext(bookContext);
  return (
    <>
      <Container sx={{ margin: '30px auto' }} maxWidth="xl">
        <Typography align="center" variant="h2" margin="20px auto">
          Peliculas
        </Typography>

        <Box
          display="flex"
          flexDirection={matches ? 'row' : 'column'}
          justifyContent="space-between"
          alignItems="center"
        >
          <InputFilter />
          <NavLink to="/home/submitbook">
            <Button
              variant="contained"
              color="success"
              sx={{ marginRight: matches && '120px' }}
            >
              <AutoStoriesOutlinedIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="List of books" />
            </Button>
          </NavLink>
        </Box>
        <Grid container>
          {filteredBooks &&
            filteredBooks.map((book, i) => (
              <CardComponent key={i} book={book} />
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
