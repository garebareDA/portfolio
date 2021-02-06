import * as React from 'react';
import styled from 'styled-components';

const Arrows = styled.svg({});

class Arrow extends React.Component {
  render(){
    return (
      <div>
        <Arrows xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 50" width="210" height="50">
          <path
            opacity="1" fill = "#ffffff" stroke="#ffffff" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity="1" strokeMiterlimit="4" strokeDasharray="none"
            d="M 9.8278804,15.119047 C 100.54217,43.845239 101.29812,43.845239 101.29812,43.845239"
            id="path26"
            />
          <path
            opacity="1" fill = "#ffffff" stroke="#ffffff" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity="1" strokeMiterlimit="4" strokeDasharray="none"
            d="M 192.76786,15.119046 C 102.05357,43.845239 101.29762,43.845239 101.29762,43.845239"
            id="path26-6"
            />
        </Arrows>
      </div>
    )
  }
}

export default Arrow;