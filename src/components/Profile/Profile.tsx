import { Grid } from "@mui/material";
import React from "react";
import { ProfileRepoContainer } from "../ProfileRepoContainer/ProfileRepoContainer";

export const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        Profile Picture
      </Grid>
      <Grid item xs={8}>
        <ProfileRepoContainer />
      </Grid>
    </Grid>
  );
};
