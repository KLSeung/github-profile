import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
