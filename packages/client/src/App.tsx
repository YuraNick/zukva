import { useEffect } from 'react'
import './App.css'
import { MainRouter } from '../src/routs/MainRouter'

function App() {

  // get data from local server

  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${ __SERVER_PORT__ }`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //   }
  //
  //   fetchServerData()
  // }, [])
  return (
    <div className='App'>
    <MainRouter />
  </div> )
}

export default App
