import {
  Box,
  Button,
  Container,
  Grid,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CardComponent from '../components/CardComponent';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';
import InputFilter from '../components/InputFilter';
import { NavLink } from 'react-router-dom';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
const Home = () => {
  const { filteredBooks } = useContext(bookContext);
  return (
    <>
      <Container sx={{ margin: '30px auto' }} maxWidth="xl">
        <Typography align="center" variant="h2" margin="20px auto">
          Peliculas
        </Typography>
        <ListItemIcon
          sx={{ display: 'flex', justifyContent: 'end', margin: '30px auto' }}
        >
          <NavLink to="/home/submitbook">
            <Button variant="contained" color="success">
              <AutoStoriesOutlinedIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="List of books" />
            </Button>
          </NavLink>
        </ListItemIcon>
        <Box display="flex" justifyContent="space-between">
          <InputFilter />
        </Box>

        <Grid spacing={4} container mb={10} mt={0}>
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
