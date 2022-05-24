import { Grid } from "@mui/material";
import React from "react";
import { ProfileInfo } from "../ProfileInfo/ProfileInfo";
import { ProfileRepoContainer } from "../ProfileRepoContainer/ProfileRepoContainer";

export const Profile = ({ userInfo, userRepos }: any) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={3}>
        <ProfileInfo userInfo={userInfo} />
      </Grid>
      <Grid item xs={9}>
        <ProfileRepoContainer userRepos={userRepos} />
      </Grid>
    </Grid>
  );
};
