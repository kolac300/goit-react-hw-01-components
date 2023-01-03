import { Description } from 'components/Profile/Description/Description'
import { Stats } from 'components/Profile/Stats/Stats'
import PropTypes from 'prop-types'
import { ProfileWrapper } from './Profile.styled'



export const Profile = ({ user: { avatar, username, location, tag, stats } }) => {
	return <>
		<ProfileWrapper>
			<Description avatar={avatar} username={username} location={location} tag={tag} />
			<Stats stats={stats} />
		</ProfileWrapper>
	</>
}


Profile.propTypes = {
	user: PropTypes.exact({
		stats: PropTypes.exact({
			followers: PropTypes.number,
			views: PropTypes.number,
			likes: PropTypes.number
		}).isRequired,
		avatar: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		tag: PropTypes.string.isRequired,
	})
}