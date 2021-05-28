import styled from 'styled-components';
import { BOLD, ORANGE, REGULAR, SEMIBOLD } from '@styles/variables.styled';
import { media } from '@styles/breakpoints.styled';
import { Grid } from '@styles/grid.styled';

export const HeaderStyled = styled(Grid)`
	position: fixed;
	top: 0;
	padding-top: 25px;
	padding-bottom: 25px;
	width: 100%;
	z-index: 99;
	background-color: white;
	box-shadow: 0 2px 3px 1px rgba(0,0,0,0.1),
							0 4px 10px 0 rgba(0,0,0,0.04),
							0 6px 15px 0 rgba(0,0,0,0.06);

	${media.greaterThan('sm')`
		padding-top: 30px;
		padding-bottom: 30px;
		margin-bottom: 50px;
	`};
	a, a:visited {
		color: black;
	}
	h1 {
		font-weight: ${BOLD};
		font-size: 2rem;
		text-transform: uppercase;
		letter-spacing: .2em;

		${media.greaterThan('sm')`
			font-size: 3rem;
		`};
	}
`;

export const CountItemsStyled = styled.div`
	border-radius: 100%;
	position: absolute;
	top: -10px;
	right: -10px;
	background-color: ${ORANGE};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
	width: 23px;
	height: 23px;
	box-shadow: -1px 2px 3px 1px rgba(0,0,0,0.2),
							-2px 4px 7px 0 rgba(0,0,0,0.05),
							-2px 7px 20px 0 rgba(0,0,0,0.07);

	span {
		color: white;
		font-size: 1rem;
		line-height: 1;
		font-weight: ${SEMIBOLD};
	}

`;