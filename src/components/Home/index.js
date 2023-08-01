// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCard: [], isLoading: false}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCard: updatedData, isLoading: false})
  }

  render() {
    const {teamCard, isLoading} = this.state
    return (
      <div className="div1">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <div className="div2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="ul">
              {teamCard.map(each => (
                <TeamCard key={each.id} teamCard={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
