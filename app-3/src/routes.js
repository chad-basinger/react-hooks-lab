import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import PokemonList from './Components/PokemonList'
import Pokemon from './Components/Pokemon'

export default (
        <Switch>
            <Route exact path='/' component={PokemonList}/>
            <Route path='/pokemon/:name' component={Pokemon}/>
        </Switch>
)

