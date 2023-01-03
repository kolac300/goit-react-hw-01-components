import PropTypes from 'prop-types'
export const Description = ({ avatar, username, location, tag }) => {
	return <>
		<img src={avatar} alt="avatar" width='100px' />
		<h1>{username}</h1>
		<p>@{tag}</p>
		<p>{location}</p>
	</>
}

Description.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
}