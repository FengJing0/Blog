import styled from "styled-components"

export const PagesWrapper = styled('div')`
  background-color:${p => p.bg || '#fff'};
  box-shadow: 0 1px 2px rgba(0,0,0,.4);
  padding:${props => props.padding || '20px'};
  min-height:${p=>p.height||'300px'};
  border-radius:4px;
`

export const Title = styled('p')`
  font-size:28px;
  font-weight:bolder;
  background:#fff;
  padding:15px 0 15px 15px;
  margin:0;
  a{
    font-size:16px;
  }
`

export const CenterTitle = styled('p')`
  font-size:28px;
  font-weight:bolder;
  color:#000;
  text-align:center;
  padding:15px 0;
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

export const FromWrapper = styled('div')`
  width:300px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  padding:20px;
  background:#fff;
  border-radius:4px ;
  box-shadow: 0 1px 2px rgba(0,0,0,.4);
`