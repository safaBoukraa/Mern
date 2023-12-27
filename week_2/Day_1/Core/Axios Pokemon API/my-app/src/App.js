import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  // const [hero, setHero] = useState(null);
  // const [heroId, setHeroId] = useState(1);

  const axiosPokemon= () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`
      )
      .then((response) => {
        setPokemon(response.data.results);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

      useEffect(() => {
    axiosPokemon();
  }, []);
  
  return (
    <div className="App">

      <button className='btn' onClick ={axiosPokemon} >Fetch Pokemon</button>
  
        {pokemon.map((onepokemon,id)=>{
          return <p key={id}>{onepokemon.name}</p>
        })}

  

    </div>
  );
}

export default App;

