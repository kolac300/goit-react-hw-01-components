import PropTypes from 'prop-types'
import { StatWrapper } from './Stat.styled'

export const Stat = ({ counter, info }) => {
	return <>
		<StatWrapper>
			<div>{info}</div>
			<div>{counter}</div>
		</StatWrapper>
	</>
}
Stat.propTypes = {
	counter: PropTypes.number.isRequired,
	info: PropTypes.string.isRequired,
}