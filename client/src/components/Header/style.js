import styled from 'styled-components'

export const HeaderComponent = styled('header')`
  background-color: ${props=>props.theme.headerbg};
  box-shadow: 0 2px 4px 1px rgba(0,0,0,.5);
  margin-bottom:20px;
`

export const HeaderWrapper = styled('div')`
  max-width:1200px;
  margin:0 auto;
  span.iconfont{
    font-size:20px;
  }
`

export const Logo = styled('div')`
  width:150px;
  font-size:26px;
  height:48px;
  line-height:48px;
  color:${props => props.theme.subFont}
  &img{
    width:150px;
  }
`

export const LoginBtn = styled('div')`
  width:100px;
  height:49px;
  font-size:20px;
  border-bottom:2px solid ${props => props.theme.primary};
  background-color:${props => props.theme.primary}
  cursor: pointer;
  line-height:48px;
  text-align:center;
  a{color:#fff;}
`