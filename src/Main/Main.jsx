import { useContext, useState } from "react"
import { PlayerInfo } from '../App.jsx'


export default function Main() {

  
  const {DB} = useContext(PlayerInfo)

  

  return (
    <>
    <p>All Players</p>
    
    <div className="Players">
      {DB.map(({id, name, position}, i) => (
        <Player id={id} name={name} position={position} key={i} />
      ) )}
    </div>
    </>
    
  )
}

function Player ({id, name, position, i}) {
  const [playerStyle, setPlayerStyle] = useState('white')
  const {addPlayers} = useContext(PlayerInfo)
  const {removePlayer} = useContext(PlayerInfo)

function updateStyle(id, name, position) {
    
    if (playerStyle == 'white') {
      addPlayers(id, name, position)
      setPlayerStyle('yellow')
    } else {
      setPlayerStyle('white')
      removePlayer(id)
    }
  }

  return (
    <div className="Player" style={{ background: playerStyle}} onClick={() => updateStyle(id, name, position)} key={i} id={id}>
        <p>{name}</p>
        <p>{position}</p>
        </div>

  )
}

