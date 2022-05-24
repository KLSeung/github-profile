import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ReactComponent as GitHubIcon } from "../../assets/github-logo.svg";

interface INavbar {
  searchedUser: string;
  setSearchedUser: React.Dispatch<React.SetStateAction<string>>;
  onSearchEnter: (user: string) => void;
}

export const Navbar = ({
  searchedUser,
  setSearchedUser,
  onSearchEnter,
}: INavbar) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#2d333b" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <GitHubIcon />
        </IconButton>
        <Stack className="navbar-items" direction="row" sx={{ flexGrow: 1 }}>
          <TextField
            label={searchedUser === "" ? "Search or Jump to" : ""}
            variant="outlined"
            sx={{
              input: {
                color: "white",
              },
              mr: 2,
            }}
            InputLabelProps={{
              shrink: false,
              style: { color: "#fff" },
            }}
            onChange={(e) => setSearchedUser(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearchEnter(searchedUser);
              }
            }}
            value={searchedUser}
            size="small"
          />
          <Button color="inherit" sx={{ mr: 1 }}>
            Pull Requests
          </Button>
          <Button color="inherit" sx={{ mr: 1 }}>
            Issues
          </Button>
          <Button color="inherit" sx={{ mr: 1 }}>
            Codespaces
          </Button>
          <Button color="inherit" sx={{ mr: 1 }}>
            Marketplace
          </Button>
          <Button color="inherit" sx={{ mr: 1 }}>
            Explore
          </Button>
        </Stack>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
