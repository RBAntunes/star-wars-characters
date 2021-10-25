import axios from 'axios';

import Character from './Character';

const address = 'https://swapi.dev/api/';

export default class StarWarsAPI {
    async getAllCharacters() {
        let response = await axios.get(`${address}people/`);
        let allCharacters  = response.data.results;
        while ( response.data.next !== null ) {
            response = await axios.get(response.data.next);
            allCharacters = [ ...allCharacters, ...response.data.results ]
        }
        return allCharacters.map( character => new Character( character ));
    }

    async getFilmWithURL( filmURL ) {
        const response = await axios.get( filmURL );
        return response.data;
    }

    async getCharacter( characterId ) {
        const response = await axios.get( `${address}people/${characterId}` );
        return response.data;
    }
}
