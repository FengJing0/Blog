import styled from "styled-components"

export const PagesWrapper = styled('div')`
  background-color:#fff;
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