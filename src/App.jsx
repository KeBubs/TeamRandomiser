import { useState, useEffect, createContext, useContext } from 'react'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import DB from "./players.js"

import './App.css'

export const PlayerInfo = createContext(null)

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

  function addPlayers(id, name, position) {
    setSelectedPlayers([...selectedPlayers, {id, name, position}])
  }

  function removePlayer(id){
    setSelectedPlayers(selectedPlayers.filter(player => player.id != id))
  }

  return (

    isLoading ? <div className="loading-screen"><p>loading...</p></div> : 

     <PlayerInfo.Provider value={{DB, addPlayers, removePlayer, selectedPlayers}}> 
     <Header />
      <Main />
      <Footer />
     </PlayerInfo.Provider>
     
    
  )
}

export default App
