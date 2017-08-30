import styled from "styled-components";

const Description = styled.p`
  font: 1.7em "ArnoProItalic", Georgia, sans-serif;
  max-width: 700px;
  margin: 33px auto 0;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 767px){
  	font-size: 1.25em;
  	max-width: 460px;
  	padding-left: 5px;
  	padding-right: 5px;
  }
`;

export default Description;
