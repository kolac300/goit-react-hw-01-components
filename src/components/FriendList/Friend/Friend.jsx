import PropTypes from 'prop-types'
import { FriendWrapper } from './Friend.styled'
export const Friend = ({ avatar, name, isOnline }) => {

	return <>
		<FriendWrapper isOnline={isOnline}>
			<span className='IsOnline'>
			</span>
			<img src={avatar} alt="avatar" /><span className='Name'>{name}</span>
		</FriendWrapper>
	</>
}
Friend.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
}
