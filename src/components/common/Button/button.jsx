import React from 'react';
import btnToDescript from '../../../pictures/arrows.png';
import styled from 'styled-components';

const Button = styled.button`
  right: 0;
  background: url(${btnToDescript}) no-repeat;  
  width: 136px;
  height: 48px;
  position: absolute;
  top: 75%;
  border: 0;
  padding: 0;
  display: block;
  cursor: pointer;
`;

export default Button;