// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchItem: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchItem()
  }

  getTeamMatchItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchItem: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchItem, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchItem
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt="team" />
            <p>Latest Matches</p>
            <div>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                key={latestMatchDetails.id}
              />
            </div>
            <div>
              {recentMatches.map(each => (
                <MatchCard key={each.id} matchCard={each} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
