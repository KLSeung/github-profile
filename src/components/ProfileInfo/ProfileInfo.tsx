import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import React, { useEffect, useState } from "react";

export const ProfileInfo = ({ userInfo }: any) => {
  return (
    <Box display="flex" justifyContent="right" textAlign="left">
      <Stack>
        <Box
          component="img"
          sx={{
            borderRadius: "50%",
            maxHeight: { xs: 500, md: 450 },
            maxWidth: { xs: 350, md: 300 },
            my: 3,
          }}
          alt=""
          src={userInfo.avatar_url}
        />
        <Box sx={{ ml: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "medium" }}>
            {userInfo.name}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "light" }}>
            {userInfo.login}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "light", mt: 2 }}>
            {userInfo.bio}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};
