import React from 'react'
import {Menu} from "antd"
import {Link} from "react-router-dom"
import {HeaderWrapper, Logo, LoginBtn, HeaderComponent} from './style'
import {withRouter} from "react-router-dom"
import Icon from "../Icon"


const Item = Menu.Item

function getNavList() {
  const navList = [
    {to: '/', title: 'Home',icon:'homepage_fill'},
    {to: '/Blog', title: 'Blog',icon:'activity_fill'},
    {to: '/Archives', title: 'Archives',icon:'document_fill'},
    {to: 'Collections', title: 'Collections',icon:'collection_fill'},
    {to: '/Demo', title: 'Demo',icon:'createtask_fill'},
    {to: '/About', title: 'About',icon:'like_fill'}
  ]
  return navList.map(item => (
      <Item key={item.to}><Link to={item.to}><Icon name={item.icon}/>{item.title}</Link></Item>
  ))
}

const Header = props => {

  return (
      <HeaderComponent>
        <HeaderWrapper className='b-clearfix'>
          <Logo className='b-fl'>
            Logo
          </Logo>
          <LoginBtn className='b-fr'>
            <Link to='/login'>login</Link>
          </LoginBtn>
          <Menu mode='horizontal' defaultSelectedKeys={[props.location.pathname]} className='b-fr'>
            {getNavList()}
          </Menu>
        </HeaderWrapper>
      </HeaderComponent>
  )
}

export default withRouter(Header)