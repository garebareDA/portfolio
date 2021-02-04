import * as React from 'react';
import styled from 'styled-components';
import icon from '../../../images/icon/garebare.jpg';

const IconGarebare = styled.img({
  borderRadius:"200px",
  width:"400px",
  height:"400px",
});

class Icon extends React.Component {
  render(){
    return (
      <div>
        <IconGarebare src={icon}/>
      </div>
    )
  }
}

export default Icon;