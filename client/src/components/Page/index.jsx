import React from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import {List} from "./style"
import {PagesWrapper, Title} from "../../style/common_style"
import {Col, Divider, Row, Tag} from "antd"

import {scope} from "../../enum"

const getTags = tags => {
  if (tags && tags.length > 0) {
    if(typeof tags[0] === 'object'){
      tags = tags.map(item => item.name)
    }
    return tags.map(tag => <Tag key={tag} style={{margin: '0 5px', fontSize: 14}}>{tag}</Tag>)
  }
}

const getEditBtn = (type, userInfo) => {
  if (userInfo.scope === scope.Super && type === 'Blog') {
    return <Link to='/edit'>写博客</Link>
  }
}

const getMain = ({type, list, userInfo}) => {
  if(type==='Collections'){
    return (
        <Col span={18}>
          <PagesWrapper>
            <Title>{type}</Title>
            <Divider/>
            <ul>
              {
                list.map(item => (<List key={item.id}>
                  <a href={item.url} target='_blank' rel='noopener noreferrer'>{item.title}</a>&nbsp;
                  {getTags([item.type])}
                  <p>{item.summary}</p>
                </List>))
              }
            </ul>
          </PagesWrapper>
        </Col>
    )
  }

  return (<Col span={18}>
    <PagesWrapper>
      <Title>{type} {getEditBtn(type, userInfo)}</Title>
      <Divider/>
      <ul>
        {
          list.map(item => (<List key={item.id}>
            <span>{item.create_time}</span>&nbsp;&nbsp;
            <Link to={`/Detail/${type}/${item.id}`}>{item.title}</Link>&nbsp;
            {getTags(item.category)}
          </List>))
        }
      </ul>
    </PagesWrapper>
  </Col>)
}

const getAside = props => {
  return (<Col span={6}>
    <PagesWrapper padding={props.padding}>
      {props.children}
    </PagesWrapper>
  </Col>)
}

const Page = props => {
  return (<Row gutter={16}>
    {getMain(props)}
    {getAside(props)}
  </Row>)
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Page)
