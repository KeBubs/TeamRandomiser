import { useState, useEffect, createContext, useContext } from 'react'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'
import DB from "./players.js"
import { PlayerInfo } from '../Contexts/index.js'
import { Loading } from './Main/loading.jsx'
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
    }, 2000)
    
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

    isLoading ? <Loading/> : 

     <PlayerInfo.Provider value={{clubPlayers, addPlayers, removePlayer, selectedPlayers}}> 
     <Header />
      <Main />
      <Footer />
     </PlayerInfo.Provider>
     
    
  )
}

export default App
