import PropTypes from 'prop-types'
import { StatWrapper } from './Stat.styled'

export const Stat = ({ counter, info }) => {
	return <>
		<StatWrapper>
			<li>{info}</li>
			<li>{counter}</li>
		</StatWrapper>
	</>
}
Stat.propTypes = {
	counter: PropTypes.number.isRequired,
	info: PropTypes.string.isRequired,
}