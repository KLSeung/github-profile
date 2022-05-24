import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

const App = () => {
  const [searchedUser, setSearchedUser] = useState("");
  const [userInfo, setUserInfo]: any = useState({});
  const [userRepos, setUserRepos]: any = useState([]);

  const onSearchEnter = (user: string) => {
    fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        Authorization: `SHA256:G8fFj6sLPV85Uquw1516V0Op1niG07QWX7oKR4Gz6aQ`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // error handling with not found user message
        if (data.message === "Not Found") {
        } else {
          setUserRepos(data);
        }
      });

    fetch(
      `https://api.github.com/users/${user}/repos?page=1&per_page=20&sort=updated`,
      {
        method: "GET",
        headers: {
          Authorization: `SHA256:G8fFj6sLPV85Uquw1516V0Op1niG07QWX7oKR4Gz6aQ`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // error handling with not found user message
        if (data.message === "Not Found") {
        } else {
          setUserRepos(data);
        }
      });
  };

  useEffect(() => {
    onSearchEnter("klseung");
  }, []);

  return (
    <div className="App">
      <Navbar
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
        onSearchEnter={onSearchEnter}
      />
      <Profile userInfo={userInfo} userRepos={userRepos} />
    </div>
  );
};

export default App;
