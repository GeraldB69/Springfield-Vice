import styled from 'styled-components';

import { rotatingRight, rotatingLeft } from './KeyFrames';
 
export const InnerGrid = styled.div`
    position: relative;
    top: -850px;
    opacity: 0.3;
    width: 1000px;
    height: 1000px;
    transform-origin: 50% 50%;
    animation-name: ${rotatingRight};
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    `
 
export default InnerGrid;