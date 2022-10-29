import React from "react";
import Header from "./Header";
import BackButton from "./BackButton";
import CommentsList from "./CommentsList";
import Ratings from "./Ratings";
import { Grid } from "@material-ui/core";

function MainPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12}>
          <Header />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Ratings />
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <CommentsList />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
