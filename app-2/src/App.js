import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import ListItem from './Components/ListItem'
import Header from './Components/Header'
import People from './Components/People'
import PeopleHeader from './Components/PeopleHeader'

function App() {
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets')
        .then((res) => {
            // const resultNames = res.data.results.map(planets.name)
            setPlanets(res.data.results)
        })

        axios.get('https://swapi.dev/api/people')
        .then((res) => {
            // const resultNames = res.data.results.map(planets.name)
            setPeople(res.data.results)
        })

        // return () => {
        //     console.log('STAR WARS ROCKS')
        // }
    }, [])

  return (
    <div className="App">
      <section className='planets-section'>
        <h1 className='header'>
          <Header/>
        </h1>
        <div>
            {planets.map((element, index) => {
                return <ListItem name={element.name} key={index}/>
              })}
        </div>
      </section>
      <section className='people-section'>
        <h1 className='header'>
          <PeopleHeader/>
        </h1>
        <div>
            {people.map((element, index) => {
                return <People name={element.name} key={index}/>
              })}
        </div>
      </section>
      
    </div>
  );
}

export default App;
