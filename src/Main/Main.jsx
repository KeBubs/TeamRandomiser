export default function Main({clubPlayers, selectedPlayers, addPlayers}) {
  return (
    <>
    <p>All Players</p>
    <div className="Players">
      {clubPlayers.map(({name, position}, i) => (
        <div className="Player" onClick={() => addPlayers(name, position)} key={i}>
        <p>{name}</p>
        <p>{position}</p>
        </div>
      ) )}
    </div>
    </>
    
  )
}