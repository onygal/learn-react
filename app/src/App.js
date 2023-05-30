import React, { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';



export default function App() {


  const [estado, setEstado] = useState("App")

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setEstado(date.getTime());
    }, 1000)
  }, [])


  const meu = (valor, tett) => {
    console.log(valor)
  }

  meu('teste')

  return (


    <>
      <Board />
      React
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React. {estado}
          </a>
        </header>
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button className="square"
      onClick={handleClick}
    >

    </button>

  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );

}

