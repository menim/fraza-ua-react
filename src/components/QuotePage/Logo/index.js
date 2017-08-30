import styled from "styled-components";

const Logo = styled.img`
  width: 326px;
  height: 132px;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  display: block;
  @media (max-width: 767px){
  	width: 196px;
	height: 79px;
  }
`;

export default Logo;
