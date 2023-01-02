import styled from 'styled-components';
export const TransactionsWrapper = styled.div`
width:25%;
margin: auto;
background:white;
padding:2rem;


tr:nth-child(2n) {
    background: #f0f0f0; 
   }
	
table{
	width:100%;
	border-collapse: collapse;
}
td{
	border:1px solid silver;
	text-align:center;
	padding:10px;
}
th{
	border:1px solid silver;
	color:white;
	background:skyblue;
	padding:10px;
}
`