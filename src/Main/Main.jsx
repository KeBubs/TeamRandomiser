import { useContext, useEffect, useState } from "react"
import { PlayerInfo } from "../../Contexts/index.js"
import { Player } from "./Player.jsx"


export default function Main() {

  const {clubPlayers} = useContext(PlayerInfo)
  // Set state to check whether the button has been clicked
  const [buttonClicked, setButtonClicked] = useState(false)
  // Get the selected players from the context
  const {selectedPlayers} = useContext(PlayerInfo)
  // Create function which takes in the number entered in the search field, and splits selected players into teams.
  const teams = []
  const [teamState, setTeamState] = useState([])
  const [inputValue, setInputValue] = useState(0)
  
  // Change the inputvalue state to the value of the radio button
  function handleInputChange(e) {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }

  function generateTeams() {
      // For loop to create 'x' amount of  teams
      let selectValue = inputValue
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
}
  
  return (
    <>
      {buttonClicked ? (
        <div className="loaded-teams">
        <button className="Btn" type='reset' value='Start again...' onClick={() => window.location.reload()}>Start Again...</button>
        <CreatedTeams teams={teamState} />
        </div>
      ) : (
        <>
        <div className="navBar">
          <label>How many teams?</label>
            <fieldset onChange={(e) => {
            e.preventDefault();
            handleInputChange(e);
          }} className="radioBtns teams">
            <label>2<input type='radio' name="teams" value='2'></input></label>
          <label>3<input type='radio' name="teams" value='3' ></input></label>
          <label>4<input type='radio' name="teams" value='4' ></input></label>
          <button className="Btn" type='submit' onClick={() => generateTeams(inputValue)} >
            Generate Teams
          </button>
          </fieldset>
          
          
          
          <p>Players Selected: {selectedPlayers.length}</p>
        </div>
          

          <div className="Players">
            {clubPlayers.map((player, i) => (
              <Player
                
                id={player.id}
                name={player.name}
                position={player.position}
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


function CreatedTeams({teams}) {
  return (
    <>
    
    {teams.map((team, i) => (
      <>
      <p>Team {i + 1}</p>
      <div className="Players" key={i}>
        
        {team.map((player, i) => (
          <SelectedPlayer id={player.id} name={player.name} position={player.position} key={i} />
        
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