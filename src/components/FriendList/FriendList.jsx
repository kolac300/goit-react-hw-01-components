import PropTypes from 'prop-types'
import { Friends, Friend, FriendsWrapper } from './FriendList.styled'
export const FriendList = ({ friends }) => {
	return <>
		<FriendsWrapper>
			<Friends>
				{friends.map(friend => <Friend isOnline={friend.isOnline} key={friend.id}> <span className='IsOnline'>
				</span>
					<img src={friend.avatar} alt="avatar" /><span className='Name'>{friend.name}</span>
				</Friend>)}
			</Friends>
		</FriendsWrapper>
	</>
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		}),
	).isRequired
}
