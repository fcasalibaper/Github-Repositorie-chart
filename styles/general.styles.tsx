import styled from 'styled-components';
import { containerMaxWidth, media } from './breakpoints.styled';
import { REGULAR, TRANSITION, PADDING_DESKTOP_LR, BOLD, FONT_ROOT, PADDING_MOBILE_LR, ORANGE, DARKBLUE } from './variables.styled';


export const Row = styled.div`
  position:relative;
  display:flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  /* max-width:100%; */
  width:${props => props.width ? props.width : '100%'};
  
	${props => props.maxWidth &&`
    max-width: ${props.maxWidth};
  `}

  ${props => props.wrap &&`
    flex-wrap: wrap;
  `}

  ${props => props.margin &&`
    margin: ${props.margin};
  `}

  ${props => props.padd &&`
    padding: ${props.padd};
  `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width:100%;
	max-width: ${containerMaxWidth}px;
	margin: auto;
	padding: ${props => props.padd ? props.padd : `0 ${PADDING_MOBILE_LR}px`};
  flex-direction: ${props => props.column ? 'column' : 'row'};

	${media.greaterThan("sm")`
		padding: ${props => props.padd ? props.padd : `0 ${PADDING_DESKTOP_LR}px`};
	`};

  ${props => props.center &&`
    justify-content:center;
  `}

  ${props => props.justifyContent &&`
    justify-content: ${props.justifyContent};
  `}

  ${props => props.alignItems &&`
    align-items: ${props.alignItems};
  `}

  ${props => props.wrap &&`
    flex-wrap: wrap;
  `}

  ${props => props.margin &&`
    margin: ${props.margin};
  `}
`;

export const ContainerWrap = styled(Container)`
  flex-wrap: wrap;
`;

export const FlexColumn = styled(Container)`
  flex-direction:column;
`;

export const ColumnMobile = styled(Container)`
  ${media.lessThan('xs')`
    flex-direction:column;
  `};
`;

export const FlexWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const FlexRow = styled(Row)`
  position:relative;
  display:flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};

  ${props => props.xAlign &&`
    align-items: ${props.xAlign};
  `}

  ${props => props.yAlign &&`
    justify-content: ${props.yAlign};
  `}
`;

export const UnderlineLink = styled.button`
  font-size: 1.2rem;
  font-weight: ${REGULAR};
	color: blue;
  line-height: 1;
  letter-spacing: -0.31px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
	

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

// BUTTONS
export const UnderLinkSpan = UnderlineLink.withComponent('span');

export const ButtonStyled = styled.button`
	font-family: ${FONT_ROOT};
	border-radius: 4px;
	border: none;
	box-shadow: 0 2px 1px 0 rgba(50, 54, 72, 0.5),
		0 3px 8px 0 rgba(50, 54, 72, 0.2);
	/* height: 43px; */
	padding: 1rem 2rem;
	text-transform: ${props => props.uppercase == true ? 'uppercase' : 'inherit' };
	background-color: ${props => props.variant == 'outlined' ? 'transparent' : DARKBLUE};
	font-size: 1rem;
  font-weight: ${BOLD};
  line-height: 1.4;
  text-align: center;
  color: white;
	width: ${props => props.size == 'full' ? '100%' : 'auto'};
	border: 1px solid ${props => props.variant == 'outlined' ? 'blue' : 'transparent'};
	color:  ${props => props.variant == 'outlined' ? 'black' : 'white'};
	cursor: pointer;
	transition: ${TRANSITION};

	${media.greaterThan('sm')`
		border-radius: 4px;
		font-size: 1.3rem;
		line-height: 1.55;
		/* height: 50px; */
	`};

	&:hover,
	&:focus {
		box-shadow: 0 2px 2px 1px rgba(90, 117, 235, 0.3),
								0 7px 5px 1px rgba(78, 97, 179, 0.08),
								0 12px 12px 0px rgba(120, 56, 133, 0.04);
	}

	${props => props.disabled &&`
		cursor: none;
		pointer-event: none;
		background-color: #9e9e9e;
		color: #888888;
	`}
`;

export const UnderLinkButton = styled(ButtonStyled)`
	background-color: transparent;
	font-size: 16px;
	font-weight: ${BOLD};
	color: black;
	text-decoration: underline;
	box-shadow: none;
	text-transform: none;

	&:hover,
	&:focus {
		box-shadow: none;
	}
`;

export const ButtonStyledA = ButtonStyled.withComponent('a');

export const BackButton = styled.div`
  position: relative;
  left: -5px;
  svg {
    height: 20px;
    color: lightblue;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
		transition: ${TRANSITION};

    span {
      font-size: 14px;
    }
  }
`;