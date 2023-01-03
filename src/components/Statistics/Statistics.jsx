import PropTypes from 'prop-types'
import { List, Li, StatisticsWrapper } from './Statistics.styled'

export const Statistics = ({ stats: items, title }) => {
	return <>
		<StatisticsWrapper>
			{title ? <h2>{title}</h2> : null}
			<List>
				{items.map(item => {
					return <Li color={Math.floor(Math.random() * 8)} key={item.id}>{item.label}<hr />{item.percentage} %</Li>
				})}
			</List>
		</StatisticsWrapper>
	</>
}

Statistics.propTypes = {
	stats: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired
	}),).isRequired
}