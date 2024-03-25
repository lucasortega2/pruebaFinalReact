import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import { NavLink } from 'react-router-dom';

const maxCharacters = 150;
const truncateDescription = (description) => {
  if (description.length > maxCharacters) {
    return description.substring(0, maxCharacters) + '...';
  } else {
    return description;
  }
};

const CardComponent = ({ book }) => {
  const { title, description, image_url, pages, id } = book;
  const shortDescription = truncateDescription(description);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          width: 280,
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '500px',
        }}
      >
        <CardMedia
          sx={{
            height: '300px',
            backgroundSize: 'contain',
          }}
          image={image_url}
        />

        <CardContent>
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
          <Typography textAlign="center">{shortDescription}</Typography>
          <Typography mt={1}>Pages: {pages}</Typography>
        </CardContent>
        <CardActions sx={{ marginBottom: 1 }}>
          <NavLink to={`/home/${id}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained">See more</Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComponent;
