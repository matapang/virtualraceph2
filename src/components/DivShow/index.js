import styled from 'styled-components';

const DivShow = styled.div`
   @media (max-width: ${props=> props.aboveXs ? "768px" : "992px" }) {
		display:none;
	}
`;

export default DivShow;
