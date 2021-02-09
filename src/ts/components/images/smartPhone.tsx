import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import smartPhone from '../../../images/profile/smartPhone.webp';
import MediaQuery from "react-responsive";
import { InView, IdleProps } from '../home/profile';

type Props = {
  inView: InView,
  anim: IdleProps,
}

const SmartPhoneAnimation = keyframes`
  100% {
    background-position: -2625px 0;
  }
`;

const SmartPhoneIdle = keyframes`
  0% {
    background-postion: 0px 0px;
  }
`;

const ImagePhone = styled.div<IdleProps>(
  () => ({
    background: `url(${smartPhone}) no-repeat`,
    backgroundSize: "3000px",
    width: "370px",
    height: "920px",
    margin: "auto",
  }),
  css`
  animation: ${(props: IdleProps) => {
      if (props.idle == false && props.isPlayed == false) {
        return SmartPhoneIdle;
      } else {
        return SmartPhoneAnimation;
      }
    }} 0.5s steps(7) forwards;
  `
);

function SmartPhone(props: Props) {
  return (
    <div>
      <ImagePhone ref={props.inView.ref} idle={props.inView.inView} isPlayed={props.anim.isPlayed} isPlayedChange={props.anim.isPlayedChange}>
      </ImagePhone>
    </div>
  )
}

export default SmartPhone;