import { Grid } from '@styles/grid.styled';
import { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } from '@styles/variables.styled';
import styled from 'styled-components';
import { media } from '@styles/breakpoints.styled';

export const LayoutWrapper = styled(Grid)`
	padding-top: ${HEADER_HEIGHT_MOBILE}px;
	${media.greaterThan('sm')`
		padding-top: ${HEADER_HEIGHT_DESKTOP}px;
	`}
`;