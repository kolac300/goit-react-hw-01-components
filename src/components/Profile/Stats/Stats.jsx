import PropTypes from 'prop-types'
import { Stat } from 'components/Profile/Stats/Stat/Stat'
import { StatsWrapper } from './Stats.styled'

export const Stats = ({ stats: { followers, views, likes } }) => {
	return <>
		<StatsWrapper>
			<Stat info='followers' counter={followers} />
			<Stat info='views' counter={views} />
			<Stat info='likes' counter={likes} />
		</StatsWrapper>
	</>
}

Stats.propTypes = {
	stats: PropTypes.exact({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired
	}).isRequired
}