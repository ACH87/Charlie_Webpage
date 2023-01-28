
import './App.css';
import React from 'react';
import main_pic from './assets/pictures/temp_pic.jpg'

import ReactDOM from 'react-dom/client';
import AddDisplayButton, { HideButton } from './features/button';
import Header from './features/Header';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Main_Img(){
  return <img src={main_pic} alt="Poor WiFi" width={"100%"}/>
}

function App() {

  return (
    <div className="App">
      <Header/>
      <Main_Img/>
      <Welcome name ='Charlie Adams'/>
      <HideButton></HideButton>
    </div>
  );
}


export default App;
