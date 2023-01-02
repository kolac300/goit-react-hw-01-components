import styled from 'styled-components';



export const Friends = styled.ul`
list-style:none;
padding:0px;
`
export const Friend = styled.li`
margin-bottom:5px;
border: solid 2px silver;
border-radius:3px;
display:flex;
align-items: center;

img{
	width:60px;
	height:60px;
	padding-left:2rem;
};

span.IsOnline{
	margin-left:1rem;
	background:${props => props.isOnline ? 'green' : 'red'};
	width:15px;
	height:15px;
	border-radius:50%;
}
span.Name{
	margin:auto;
}
`

export const FriendsWrapper = styled.div`
width:25%;
margin:auto;
padding:2rem;
background:white`