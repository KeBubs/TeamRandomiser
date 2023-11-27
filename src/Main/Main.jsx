import { useContext, useEffect, useState } from "react"
import { PlayerInfo } from '../App.jsx'


export default function Main() {

  const {DB} = useContext(PlayerInfo)
  // Set state to check whether the button has been clicked
  const [buttonClicked, setButtonClicked] = useState(false)
  // Get the selected players from the context
  const {selectedPlayers} = useContext(PlayerInfo)
  // Create function which takes in the number entered in the search field, and splits selected players into teams.
  const teams = []
  const [teamState, setTeamState] = useState([])

  function generateTeams() {
      // For loop to create 'x' amount of  teams
      let selectValue = document.querySelector('select').value
      let index = 0

      for (let i = 0; i < selectValue; i++){
        teams.push([])
      }
      
      // For loop to iterate over the selected players array
      selectedPlayers.forEach((player) => {
        if (player.position == 'Goalkeeper') {
          teams[index].push(player)
          if (index == (selectValue - 1)){
          index = 0
        } else {
          index += 1
        }
      }})
      selectedPlayers.forEach((player) => {
        if (player.position == 'Defence') {
          teams[index].push(player)
          if (index == (selectValue - 1)){
            index = 0
        } else {
          index += 1
        }
      }})
      selectedPlayers.forEach((player) => {
        if (player.position == 'Midfield') {
          teams[index].push(player)
          if (index == (selectValue - 1)){
            index = 0
        } else {
          index += 1
        }
      }})
      selectedPlayers.forEach((player) => {
        if (player.position == 'Striker') {
          teams[index].push(player)
          if (index == (selectValue - 1)){
            index = 0
        } else {
          index += 1
        }
      }})
        // Firstly iterate and seperate the goalkeepers between the teams

    // If state shows the button has been clicked, then call the function to generate teams
  
  setTeamState(teams)
  setButtonClicked(true)
  console.log(teams)
}
  const [inputValue, setInputValue] = useState(0)
  function handleInputChange(e) {
    setInputValue(e.target.value)
  }
  return (
    <>
      {buttonClicked ? (
        <>
        {/* Title here for the teams that have been created? */}
        <CreatedTeams teams={teamState} />
        </>
      ) : (
        <>
        <div className="navBar">
          {/* <input className="search-field"
            onChange={handleInputChange}
            type="number"
            min="2"
            max="6"
          ></input> */}
          <label>How many teams?</label>
          <select>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button onClick={() => generateTeams(inputValue)}>
            Generate Teams
          </button>
          <p>Players Selected: {selectedPlayers.length}</p>
        </div>
          

          <div className="Players">
            {DB.map(({ id, name, position }, i) => (
              <Player
                id={id}
                name={name}
                position={position}
                key={i}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
// Player Component which takes in the player name and position as props
function Player ({id, name, position, i}) {
  const [playerStyle, setPlayerStyle] = useState({background: 'white', fontWeight: 'normal'})
  const {addPlayers} = useContext(PlayerInfo)
  const {removePlayer} = useContext(PlayerInfo)

// Function to update the style of the player div when clicked
function updateStyle(id, name, position) {
    
    if (playerStyle == {background: 'white', fontWeight: 'normal'}) {
      addPlayers(id, name, position)
      setPlayerStyle({ background: '#00693E', fontWeight: 'bold' });
    } else {
      setPlayerStyle({background: 'white', fontWeight: 'normal'})
      removePlayer(id)
    }
  }

  return (
    <div className="Player" style={playerStyle} onClick={() => updateStyle(id, name, position)} key={i} id={id}>
        <p>{name}</p>
        <p>{position}</p>
        </div>

  )
}

function CreatedTeams({teams}) {
  console.log(teams)
  return (
    <>
    
    {teams.map((team, i) => (
      <>
      <p>Team {i + 1}</p>
      <div className="Players">
        
        {team.map((player) => (
          <SelectedPlayer id={player.id} name={player.name} position={player.position} />
        
        ))}
      </div>
      </>
      
    ))}
    </>
  )
}

function SelectedPlayer ({ id, name, position }) {
  return (
    <div className="Player" key={id}>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  )
}