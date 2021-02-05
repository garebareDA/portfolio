import * as React from 'react';
import styled from 'styled-components';

const Profile = styled.div({
  textAlign:"left",
});

const TextProfile = styled.div({
  color:"white",
  fontSize:"25px",
  margin:"20px",
  transform:"rotate(15deg)",
});

const OneText = styled.span({
  fontSize: "55px"
});

const TowText = styled.span({
  fontSize:"50px",
});

const ThreeText = styled.span({
  fontSize:"45px"
});

const FourText = styled.span({
  fontSize:"40px"
})

const FiveText = styled.span({
  fontSize:"35px"
})

class Icon extends React.Component {
  render(){
    return (
      <div>
        <Profile>
          <TextProfile>
            <OneText>N</OneText>
            <TowText>a</TowText>
            <ThreeText>m</ThreeText>
            <FourText>e</FourText>
            <FiveText>:</FiveText>
            田中大貴
            </TextProfile>
          <TextProfile>
          <OneText>H</OneText>
          <TowText>andle</TowText>
          <ThreeText>Na</ThreeText>
          <FourText>me</FourText>
          <FiveText>:</FiveText>
          ガレバレ
          </TextProfile>
        </Profile>
      </div>
    )
  }
}

export default Icon;