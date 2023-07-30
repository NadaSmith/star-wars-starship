import './App.css';
import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarShipCard from './components/StartShipCard';


export default function App () {
  //initialize state to hold starships data
  const [starships, setStarships] = useState([]);

  //fetch starships data once the component mounts
  useEffect(() => {
    getAllStarships()
      .then((data) => setStarships(data))
      .catch((error) => console.error("Error setting startships state;", error));
  }, []);



  return (
    <div>
      <h1>Starships</h1>

      {starships?.map((startship) => (
        <StarShipCard key={starships.name} name={starships.name} />
      ))}
    </div>
  );
}

