import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Pokemon = props => {
    const {name} = props.match.params
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            setPokemon(res.data)
        })
    }, [name])

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img alt={pokemon.name} src={pokemon.sprites?.front_default}/>
        </div>
    )
}

export default Pokemon;