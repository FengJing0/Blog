import styled from "styled-components"

export const Title = styled('p')`
  font-size:32px;
  font-weight:bolder;
  text-align:center;
  margin-bottom:10px;
  color:#000;
`

export const Some = styled('div')`
text-align:center;
  font-size:16px;
  margin-bottom:10px;
  color:${p=>p.theme.subFont}
`