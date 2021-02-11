import * as React from 'react';
import styled from 'styled-components';

import {FontSize} from '../../styleType/fontSize'

export const Text = styled.div((porps: FontSize) => ({
  fontSize: porps.size
}),
  {
    color: "white",
    textAlign:"center",
    fontSize: `${(props: FontSize) => { props.size }}`,
});
