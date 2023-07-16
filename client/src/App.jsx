import React, { Component } from 'react';
import "./index.css"

import Header from "./components/header/Header.jsx";
import LeftSideBar from './components/leftSideBar/LeftSideBar';
import RightSideBar from './components/rightSideBar/RightSideBar';

function App() {
  return (
    <div className='app' style={{display: "flex", flexDirection: "column"}}>
      {Header()}
      <div style={{flexGrow: 1, display: 'flex', justifyContent: "space-between"}}>
        {LeftSideBar()}
        <div className='calendar-container' style={{flexFlow: 1}}>a</div>
        {RightSideBar()}
      </div>
    </div>
  );
}

export default App;
