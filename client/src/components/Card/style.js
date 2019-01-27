import styled from "styled-components"

export const Title = styled('p')`
  font-size:28px;
  color:${props => props.theme.titleColor}
  margin:0;
`

export const Gist = styled('p')`
  font-size:16px;
  margin:15px 0;
  transition:color 1s;
  &:hover{
    color:${props => props.theme.titleColor}
  }
`

export const Date = styled('p')`
  font-size:14px;
  margin:0;
`