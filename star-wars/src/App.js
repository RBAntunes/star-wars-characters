import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import StarWarsAPI from './Models/StarWarsAPI';

export default function App () {
  const [ characterList, setCharacterList ] = useState([]);
  const starWarsAPI = new StarWarsAPI();

  useEffect( async () => {
    const characters = await starWarsAPI.getAllCharacters()
    setCharacterList(characters);
  }, [])

  const listCharacters = (
      characterList.map(( character, i ) => 
        <li><Link to={`/characters/${i+1}`}>{character.name}</Link></li>
  ));

  return (
    <div className="App">
      <div className="body">
        <Header/>
        <section className="list">
          { characterList.length === 0 ? <h1 className="title black">Please wait...</h1> : 
            <React.Fragment>
              <h1 className="title black">Characters</h1>
              <div className="list-wrapper">
                <ul>{listCharacters}</ul>
              </div>
            </React.Fragment>            
          }
          
        </section>
      </div>      
    </div>
  );
}