import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/system/Box";
import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

const App = () => {
  const [searchedUser, setSearchedUser] = useState("");
  const [userInfo, setUserInfo]: any = useState({});
  const [userRepos, setUserRepos]: any = useState([]);
  const [isUserSearchError, setIsUserSearchError] = useState(false);

  const onSearchEnter = (user: string) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        // error handling with not found user message
        if (data.message === "Not Found") {
          setIsUserSearchError(true);
        } else {
          setUserInfo(data);
        }
      });

    fetch(
      `https://api.github.com/users/${user}/repos?page=1&per_page=20&sort=updated`
    )
      .then((res) => res.json())
      .then((data) => {
        // error handling with not found user message
        if (data.message === "Not Found") {
          setIsUserSearchError(true);
        } else {
          setUserRepos(data);
        }
      });
  };

  const modalStyle = {
    color: "white",
    position: "absolute" as "absolute",
    top: "40%",
    left: "40%",
    width: 400,
    bgcolor: "#444444",
    boxShadow: 24,
    p: 4,
    height: "5%",
  };

  useEffect(() => {
    onSearchEnter("klseung");
  }, []);

  return (
    <>
      <Navbar
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
        onSearchEnter={onSearchEnter}
      />
      <Profile userInfo={userInfo} userRepos={userRepos} />
      <Modal
        hideBackdrop={false}
        open={isUserSearchError}
        onClose={() => setIsUserSearchError(false)}
        sx={modalStyle}
        aria-describedby="modal-modal-description"
      >
        <Box textAlign="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User not found!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default App;
