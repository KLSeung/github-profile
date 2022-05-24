import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IProfileRepo } from "../ProfileRepoContainer/ProfileRepoContainer";
import { ReactComponent as Fork } from "../../assets/fork.svg";
import { ReactComponent as Star } from "../../assets/star.svg";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export const ProfileRepo = ({
  id,
  name,
  description,
  stargazersCount,
  forksCount,
  language,
  updatedDate,
}: IProfileRepo) => {
  return (
    <>
      <Box display="flex" justifyContent="left" textAlign="left" sx={{ my: 2 }}>
        <Stack>
          <Link
            variant="h5"
            href="#"
            underline="hover"
            sx={{ mb: 2, fontWeight: "bold" }}
          >
            {name}
          </Link>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {description}
          </Typography>
          <Stack direction="row">
            {language && (
              <Typography variant="body2" sx={{ mr: 3 }}>
                {language}
              </Typography>
            )}
            <Link
              color="black"
              variant="body2"
              href="#"
              underline="hover"
              sx={{ mr: 3 }}
            >
              <Star />
              {stargazersCount}
            </Link>
            <Link
              color="black"
              variant="body2"
              href="#"
              underline="hover"
              sx={{ mr: 3 }}
            >
              <Fork />
              {forksCount}
            </Link>
            <Typography variant="body2">
              Updated at{" "}
              {updatedDate.toLocaleString("default", {
                month: "long",
                day: "numeric",
              })}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Divider />
    </>
  );
};
