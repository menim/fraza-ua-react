import styled from "styled-components";

const Quote = styled.p`
  font-size: 2em;
  max-width: 520px;
  margin: 140px auto 0;	
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 767px){
	font-size: 1.5em;
    margin-top: 2em;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export default Quote;
