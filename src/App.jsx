import { useState, useEffect, createContext, useContext } from 'react'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import DB from "./players.js"

import './App.css'

function App() {
  
  const [clubPlayers, setClubPlayers] = useState([])
  const [selectedPlayers, setSelectedPlayers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get player data from API
    setTimeout(() => {
     setClubPlayers(DB)
     setIsLoading(false)
    }, 500)
    
  }, [])

  useEffect(() => {
    console.log(selectedPlayers)
  }, [selectedPlayers])

  function addPlayers(name, position) {
    setSelectedPlayers([...selectedPlayers, {name, position}])
  }

  return (

    isLoading ? <div>Loading...</div> : 

     <> 
     <Header />
      <Main clubPlayers={clubPlayers} selectedPlayers={selectedPlayers} addPlayers={addPlayers}/>
      <Footer />
     </>
     
    
  )
}

export default App
