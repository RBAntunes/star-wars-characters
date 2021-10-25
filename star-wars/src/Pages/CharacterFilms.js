import React, { useState, useEffect } from "react";

import '../App.css'
import Header from '../Components/Header';
import Button from '../Components/Button';
import StarWarsAPI from "../Models/StarWarsAPI";

export default function CharacterFilms ( props ) {
    const [ films, setFilms ] = useState([]);
    const [ character, setCharacter ] = useState({})
    const starWarsAPI = new StarWarsAPI();

    useEffect( async() => {
      const character = await starWarsAPI.getCharacter(props.match.params.id)
      setCharacter(character)
      const promises = character.films.map( async(film) => {
        const currentFilm = await starWarsAPI.getFilmWithURL(film)
        return currentFilm
      })
      const recievedFilms = await Promise.all(promises)
      recievedFilms.sort(( a, b ) => ( a.episode_id > b.episode_id ) ? 1: -1 )
      setFilms(recievedFilms)
    }, [])
    

    const listFilms = (
      films.map(( film, i ) => 
        <li key={i} >{`Episode ${film.episode_id}: ${film.title}`}</li>
    ));

    return (
    <div className="App">
      <div className="body">
        <Header/>
        <div className="button-wrapper-left">
          <Button buttonName={'Return'} link={'/'}></Button>
        </div>
        <section className="list">
          { films.length === 0 ? <h1 className="title black">Please wait...</h1> : 
            <React.Fragment>
              <h1 className="title black">{character.name}</h1>
              <div className="list-wrapper">
                <h2>Film appearances:</h2>
                <ul>{listFilms}</ul>
              </div>
            </React.Fragment>            
          }
          
        </section>
      </div>
      
    </div> 
    )
}