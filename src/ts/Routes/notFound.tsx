import * as React from 'react';
import styled from 'styled-components';

const Text = styled.div({
  textAlign: "center",
  color:"white",
  fontSize:"20px",
})

function NotFound() {
  return (
    <div>
      <Text>      
        <h1>404</h1>
        <h1>NotFound</h1>
      </Text>

    </div>
  )
}

export default NotFound;