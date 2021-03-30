import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ListItem = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets')
        .then((res) => {
            // const resultNames = res.data.results.map(planets.name)
            setPlanets(res.data.results)
        })

        return () => {
            console.log('STAR WARS ROCKS')
        }
    }, [])

    return <div>{JSON.stringify(planets)}</div>
}

export default ListItem;