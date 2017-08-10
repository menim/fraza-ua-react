import btnToDescript from '../../../pictures/arrows.png';

import styled from 'styled-components';

const Button = styled.button`
  ${props => props.description ? 
    'left:0; width: 122px; background-position: 122px 0;' : 
    'right:0; width: 136px; background-position: 0 0;'}
  background-image: url(${btnToDescript});
  background-color: transparent;
  height: 56px;
  position: absolute;
  top: 75%;
  border: 0;
  padding: 0;
  display: block;
  cursor: pointer;
`;

export default Button;