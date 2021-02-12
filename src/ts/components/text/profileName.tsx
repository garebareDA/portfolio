import * as React from 'react';
import styled from 'styled-components';
import {FontSize} from '../../styleType/fontSize';

type Props = {
  textMargin: string,
  oneSize: string,
  twoSize: string,
}

const TextProfile = styled.div<FontSize>(props => ({
  margin: props.size,
}),
  {
    color: "white",
    whiteSpace: "nowrap",
    margin: `${props => props.size}`,
  }
)

const OneText = styled.span<FontSize>(props => ({
  fontSize:props.size
}),
  {
    fontSize: `${props => props.size}`
  }
);

const TwoText = styled.span<FontSize>(props => ({
  fontSize:props.size
}),
  {
    fontSize: `${(props: FontSize) => props.size}`
  }
);

function ProfileName(props: Props) {
  return (
    <div>
      <TextProfile size={props.textMargin}>
        <OneText size={props.oneSize}>N</OneText><TwoText size={props.twoSize}>anme:田中大貴</TwoText>
      </TextProfile>
      <TextProfile size={props.textMargin}>
        <OneText size={props.oneSize}>H</OneText><TwoText size={props.twoSize}>andle Name:ガレバレ</TwoText>
      </TextProfile>
    </div>
  )
}

export default ProfileName;