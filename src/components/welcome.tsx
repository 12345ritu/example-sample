import React from "react";
import { Button, Container, Grid, FormControlLabel } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';

const handleClick = () => {
  const buildUrl = 'http://localhost:3000/home';
  window.open(buildUrl);
}

const Welcome = () => {
  return (
    <Container>
      <Grid container justify='center' alignContent="center" direction="column">
        <Grid item={true} lg={12} justify='center'>
          <p>Welcome </p>
          <p>Provide instructions in this block for exam </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Grid>
        <Grid item={true} lg={12}>
          <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Accept Terms & Conditions" />
        </Grid>
        <Button variant="contained" onClick={() => handleClick()}>Home</Button>
      </Grid>
    </Container>
  )
}

export default Welcome;