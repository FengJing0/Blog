import styled from "styled-components"

export const EditWrapper = styled('div')`
  background-color:${p => p.bg || '#fff'};
  box-shadow: 0 1px 2px rgba(0,0,0,.4);
  padding:${props => props.padding || '20px'};
  position: absolute;
  top:70px;
  left:20px;
  right:20px;
`

export const FromWrapper = styled('div')`
  display:flex;
  justify-content:center;
  margin:20px 0;
`