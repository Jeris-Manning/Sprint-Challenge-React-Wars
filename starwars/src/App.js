import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from "./components/CharMaker"

const App = () => {
  const [swData, setSwData] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people')
      .then((results) => {
        setSwData(results.data.results);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <div>
           {swData.map((results, index) => {
               return <Character name = {results.name} key = {index} />
           })
       }
       
       </div>
    </div>
  );
};

export default App;
