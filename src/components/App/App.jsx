import React, { useState } from "react";
import "./App.css";
import "../Header/Header";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
