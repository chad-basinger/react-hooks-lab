import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import PokemonList from './Componenets/PokemonList'
import routes from './routes'

function App() {


  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
