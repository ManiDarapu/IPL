// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCard} = props
  const {name, id, teamImageUrl} = teamCard

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="li">
        <img src={teamImageUrl} alt={name} className="image" />
        <h1>{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
