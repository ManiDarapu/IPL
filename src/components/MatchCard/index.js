// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const updatedMatchCard = {
    umpires: matchCard.umpires,
    result: matchCard.result,
    manOfTheMatch: matchCard.man_of_the_match,
    id: matchCard.id,
    date: matchCard.date,
    venue: matchCard.venue,
    competingTeam: matchCard.competing_team,
    competingTeamLogo: matchCard.competing_team_logo,
    firstInnings: matchCard.first_innings,
    secondInnings: matchCard.second_innings,
    matchStatus: matchCard.match_status,
  }
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = updatedMatchCard

  return (
    <div>
      <img src={competingTeamLogo} alt="logo" />
      <h1>{competingTeam}</h1>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
