import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsCard from './components/StarWarsCard';

import './App.css';

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://henry-mock-swapi.herokuapp.com/api')
      .then(response => {
        console.log('Star Wars Characters', response.data.results)
        setData(response.data.results);
      })
      .catch(error => {
        console.log('Sorry.  The API is not able to give you data right now', error)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
        {data.map(char => (
          <StarWarsCard char={char}
                        key={char.name} />))}
    </div>
  )  
}