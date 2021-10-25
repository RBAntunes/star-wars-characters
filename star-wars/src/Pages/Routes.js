import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App'
import CharacterFilms from './CharacterFilms';

export default class Routes extends Component {
    render(){
        return(
          <Router>
            <Route path={ '/' } exact component={ App } />
            <Route path={ '/characters/:id' } component={CharacterFilms }/>
          </Router>
        );
      }
}