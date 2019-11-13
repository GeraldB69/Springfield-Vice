import styled, { keyframes } from 'styled-components';

export const rotatingRight = keyframes`
    from{
            
        transform: rotate(0deg);
    }
    to{
        
        transform: rotate(360deg);
    }
`

export const rotatingLeft = keyframes`
    from{
            
        transform: rotate(360deg);
    }
    to{
        
        transform: rotate(0deg);
    }
`