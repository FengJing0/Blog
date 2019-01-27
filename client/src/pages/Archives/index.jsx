import React, {PureComponent} from 'react'
import {Col, Divider, Row, Tag} from "antd"
import day from 'dayjs'
import {Link} from "react-router-dom"


import {List} from "./style"
import {PagesWrapper, Title} from "../../style/common_style"


class Archives extends PureComponent {
  state = {
    BlogList: [
      {
        id: 1,
        title: '《Javascript高级程序设计》读书笔记3',
        gist: '8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',
        date: day(1548578936 * 1000).format('YYYY-MM-DD hh:mm:ss'),
        tags: ['it', 'js']
      },
      {
        id: 2,
        title: '《Javascript高级程序设计》读书笔记3',
        gist: '8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',
        date: day(1548578936 * 1000).format('YYYY-MM-DD hh:mm:ss')
      }
    ]
  }

  getTags = tags => {
    if(tags&&tags.length>0){
      return tags.map(tag => <Tag key={tag} style={{margin:'0 5px',fontSize:14}}>{tag}</Tag>)
    }
  }

  getMain = () => {
    return (<Col span={18}>
      <PagesWrapper>
        <Title>Archives</Title>
        <Divider/>
        <ul>
          {
            this.state.BlogList.map(item => (<List key={item.id}>
              <span>{item.date}</span>&nbsp;&nbsp;
              <Link to={`/Detail/Archives/${item.id}`}>{item.title}</Link>&nbsp;
              {this.getTags(item.tags)}
            </List>))
          }
        </ul>
      </PagesWrapper>
    </Col>)
  }

  getAside = () => {
    return (<Col span={6}>
      <PagesWrapper>
        <div style={{height: 300}}/>
      </PagesWrapper>
    </Col>)
  }


  render() {
    return <Row gutter={16}>
      {this.getMain()}
      {this.getAside()}
    </Row>
  }
}

export default Archives