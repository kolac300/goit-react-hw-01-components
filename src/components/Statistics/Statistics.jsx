import PropTypes from 'prop-types'
import { List, Li, StatisticsWrapper } from './Statistics.styled'

export const Statistics = ({ stats: files, title }) => {
	return <>
		<StatisticsWrapper>
			<h2>{title}</h2>
			<List>
				{files.map(file => {
					return <Li color={Math.floor(Math.random() * 8)} key={file.id}>{file.label}<hr />{file.percentage} %</Li>
				})}
			</List>
		</StatisticsWrapper>
	</>
}

Statistics.propTypes = {
	stats: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired
	}),).isRequired
}