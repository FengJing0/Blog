import styled from "styled-components"

export const Pot = styled('div')`
  width:4px;
  height:4px;
  border-radius:50%;
  background-color:${p=>p.theme.primary}
  margin:-13px auto 0;
`