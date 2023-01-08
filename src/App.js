
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AddDisplayButton, { HideButton } from './features/button';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {

  return (
    <div className="App">
      <Welcome name ='Charlie Adams'/>
      <HideButton></HideButton>
    </div>
  );
}

export default App;
