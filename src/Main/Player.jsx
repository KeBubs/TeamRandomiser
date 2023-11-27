import { useContext } from "react"
import { PlayerInfo } from "../../Contexts/index.js"

export function Player ({id, name, position}) {
    const {addPlayers, removePlayer, selectedPlayers} = useContext(PlayerInfo)
    const chosen = selectedPlayers.some((p) => p.id === id)
  
  // Function to update the style of the player div when clicked
  function handleClick(id, name, position) {
      
      if (!chosen) {
        addPlayers(id, name, position)
        
      } else {
        removePlayer(id)
      }
    }
  
    return (
      
      <div className="Player" style={{ background: chosen ? '#00693E' : 'white', color: chosen ? 'white' : 'black' }} onClick={() => handleClick(id, name, position)} key={id} id={id}>
          <p>{name}</p>
          <p>{position}</p>
          </div>
  
    )
  }