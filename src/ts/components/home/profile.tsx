import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer'

import ProfileEducation from '../text/profileEducation';
import ProfileLangage from '../text/profileLangage';
import SmartPhone from '../images/smartPhone';

type IdleProps = {
  idle: boolean,
  isPlayed:boolean,
  isPlayedChange:React.Dispatch<React.SetStateAction<boolean>>,
}

type InView = {
  ref: (node?: Element) => void,
  inView: boolean
}

const ProfileAnimation = keyframes`
  0% {
    opacity:0;
  }

  90%{ 
    opacity:0;
  }

  100% {
    opacity:1;
  }
`;

const ProfileIdle = keyframes`
  0% {
    opacity:0;
  }

  100% {
    opacity:0;
  }
`;

const Center = styled.div<IdleProps>(
  () => ({
    textAlign: "center",
    position: "relative",
    top: "-700px"
  }),
  css`
  animation:${(props: IdleProps) => {
    React.useEffect(
      () => {
        if(props.idle === true){
          props.isPlayedChange(true);
        }
      }
    )
    if(props.idle === false && props.isPlayed === false){
      return ProfileIdle;
    }else{
      return ProfileAnimation;
    }
  }
  } 0.5s forwards
  `
)

const Margin = styled.div({
  marginTop: "200px",
  marginBottom:"200px",
  height: "1000px",
});

function Profile() {
  const props:InView = useInView({
    threshold: 0.5,
  });
  const [isPlayed, setIsPlayed] = React.useState(false);
  return (
    <div>
      <Margin>
        <SmartPhone inView={props} anim={{idle:props.inView, isPlayed:isPlayed, isPlayedChange:setIsPlayed}}/>
        <Center ref={props.ref} idle={props.inView} isPlayed={isPlayed} isPlayedChange={setIsPlayed}>
          <ProfileEducation />
          <ProfileLangage />
        </Center>
      </Margin>
    </div>
  )
}
export { Profile, InView, IdleProps };