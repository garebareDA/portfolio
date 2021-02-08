import * as React from 'react';
import styled from 'styled-components';
import icon from '../../../images/icon/garebare.jpg';

const IconGarebare = styled.img({
  borderRadius: "50%",
  width: "200px",
  height: "200px",
});

function Icon() {
  return (
    <div>
      <IconGarebare src={icon} />
    </div>
  )
}

export default Icon;