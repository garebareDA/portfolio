import * as React from 'react';
import styled from 'styled-components';
import icon from '../../../images/icon/garebare.jpg';

type IsBorder = {
  border: boolean,
}

const IconGarebare = styled.img<IsBorder>((props: IsBorder) => ({
  borderStyle: props.border ? "solid" : "none"
}),

  {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    borderStyle: `${(props: IsBorder) => props.border ? "solid" : "none"}`,
    borderColor: "white",
  }
);

function Icon(props: IsBorder) {
  return (
    <div>
      <IconGarebare src={icon} border={props.border} />
    </div>
  )
}

export default Icon;