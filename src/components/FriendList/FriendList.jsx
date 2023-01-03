import PropTypes from 'prop-types'
import { Friend } from './Friend/Friend'
import { FriendsList, FriendsWrapper } from './FriendList.styled'
export const FriendList = ({ friends }) => {
	return <>
		<FriendsWrapper>
			<FriendsList>
				{friends.map(friend => <Friend key={friend.id} isOnline={friend.isOnline} name={friend.name} avatar={friend.avatar} />)}
			</FriendsList>
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
