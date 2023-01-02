import styled from 'styled-components';
export const List = styled.ul`
list-style: none;
padding: 0;
display: flex;
gap:3px
`

const randomColor = {
	0: '#006400',
	1: 'blue',
	2: '#F08080',
	3: 'yellow',
	4: '#FA8072',
	5: '#FF6347',
	6: 'red',
	7: '#4B0082',
	8: '#C71585',
}

export const Li = styled.li`
width:100%;
background:${props => randomColor[props.color]};
border-radius:5px;
padding:5px 0 5px 0;
`

export const StatisticsWrapper = styled.div`
width:25%;
margin:auto;
background: white;
text-align:center;
padding 2rem;
`
