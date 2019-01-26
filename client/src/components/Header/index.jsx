import React from 'react'
import {Menu} from "antd"
import {Link} from "react-router-dom"
import {HeaderWrapper, Logo, LoginBtn,HeaderComponent} from './style'
import {withRouter} from "react-router-dom"


const Item = Menu.Item

const Header = props => {
  const navList = [
    {to: '/', title: 'Home'},
    {to: '/Archives', title: 'Archives'},
    {to: 'Collections', title: 'Collections'},
    {to: '/Categories', title: 'Categories'},
    {to: '/About', title: 'About'}
  ]
  return (
      <HeaderComponent >
        <HeaderWrapper className='b-clearfix'>
          <Logo className='b-fl'>
            Logo
          </Logo>
          <LoginBtn className='b-fr'>
            <Link to='/login'>login</Link>
          </LoginBtn>
          <Menu mode='horizontal' defaultSelectedKeys={[props.location.pathname]} className='b-fr'>
            {
              navList.map(item => (
                  <Item key={item.to}><Link to={item.to}>{item.title}</Link></Item>
              ))
            }
          </Menu>
        </HeaderWrapper>
      </HeaderComponent>
  )
}

export default withRouter(Header)