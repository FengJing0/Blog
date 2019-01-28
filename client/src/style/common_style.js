import styled from "styled-components"

export const PagesWrapper = styled('div')`
  background-color:${p=>p.bg||'#fff'};
  box-shadow: 0 1px 2px rgba(0,0,0,.4);
  padding:${props=>props.padding||'20px'};
`

export const Title = styled('p')`
  font-size:32px;
  font-weight:bolder;
  background:#fff;
  padding:15px 0 15px 15px;
  margin:0;
`

export const FullPage = styled('div')`
  background:#333;
  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
`