import styled from "styled-components";
import { media } from "@styles/breakpoints.styled";

export const ToolResponsiveCont = styled.div`
  position:fixed;
  width:auto;
  height:auto;
  background-color:rgba(0,0,0, 0.7);
  z-index:999999;
  pointer-events:none;
  display: flex;
  flex-direction: column;
  padding: 20px;

  ${props => (props.position) === "bottomLeft" &&`
    bottom:0;
    left:0;
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
    border-bottom-right-radius: 100%;
  `}

  ${props => (props.position) === "bottomRight" &&`
    bottom:0;
    right:0;
    border-top-left-radius:100%;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
  `}

  ${props => (props.position) === "topLeft" &&`
    top:0;
    left:0;
    border-bottom-right-radius:100%;
    border-bottom-left-radius: 100%;
    border-top-right-radius: 100%;
  `}

  ${props => (props.position) === "topRight" &&`
    top:0;
    right:0;
    border-top-left-radius:100%;
    border-bottom-right-radius: 100%;
    border-bottom-left-radius: 100%;
  `}

  .resolution {
    position: relative;
    display: flex;
    justify-content: center;
    
    &:after {
      text-align: center;
      position:relative;
      font-size:20px;
      font-weight: 900;
      line-height:1.2;
      text-transform:uppercase;
      color:white;
      content:"xl";

			${media.lessThan("lg")`
        content:"lg";
      `}
      ${media.lessThan("md")`
        content:"md";
      `}
      ${media.lessThan("sm")`
        content:"sm";
      `}
      ${media.lessThan("xs")`
        content:"xs";
      `}
    }
  }

  span {
    border-top: 1px solid white;
    padding-top: 3px;
    margin-top: 3px;
    color: white;
    font-size: 16px;
  }
`;