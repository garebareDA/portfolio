import * as React from 'react';
import styled, {keyframes, css} from 'styled-components';
import smartPhone from '../../../images/profile/smartPhone.webp';

const SmartPhoneAnimation = keyframes`
  100% {
    background-position: -2625px 0;
  }
`;

const ImagePhone = styled.div(
  () => ({
    background:`url(${smartPhone}) no-repeat`,
    backgroundSize:"3000px",
    width:"370px",
    height:"920px",
    margin:"auto",
  }), 
  css`
  animation: ${SmartPhoneAnimation} 1s steps(7) forwards;
  `
);

class SmartPhone extends React.Component {
  render(){
    return (
      <div>
        <ImagePhone/>
      </div>
    )
  }
}

export default SmartPhone;