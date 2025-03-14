import { useEffect, useState } from 'react';
import './App.css'
import Watch from './components/Watch/Watch'
import Bottle from './components/Bottles/Bottles'

function App() {

  // const watches = [
  //   {id: 1, name: 'Rolex', price: 10000},
  //   {id: 2, name: 'Omega', price: 5000},
  //   {id: 3, name: 'Tissot', price: 3000},
  //   {id: 4, name: 'Casio', price: 2000}
  // ]

  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  }, [])


  return (
    <>
      
      <Bottle></Bottle>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
