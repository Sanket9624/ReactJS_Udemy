  import { useState } from "react";
  import './App.css'
  import AnimalShow from "./AnimalShow.js"
  const getrandomAnimals = () => {
    const animal = ['cat','dog','cow','bird','horse','gator']
    return animal[Math.floor(Math.random()*animal.length)]
  }

  const App = () => {
    const [animals,setAnimals] = useState([]);
    const handleClick = () => {
      setAnimals([...animals, getrandomAnimals()])
    }

    const renderedAnimals = animals.map((animal,index)=>{
      return <AnimalShow type = {animal} key = {index} />
    })
    return (
      <div className="app">   
        <button className="btn" onClick={handleClick}>
          Add Animal
        </button>
        <div className = "animalList">
          {renderedAnimals}
        </div>
      </div>
    )
  }
  export default App
