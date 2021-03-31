import React, { useState, useEffect} from 'react'
import axios from 'axios'

const PokemonList = (props) => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
        setPokemonList(res.data.results)
    })

  }, [])


    return (
        <div>
            {pokemonList.map((element, index) => {
                return (
                    element.name
                )
              })}

        </div>
        )
}

export default PokemonList;