import React,{PureComponent} from 'react'
import {Col, Row,Timeline,Divider } from "antd"
import {Link} from "react-router-dom"


import {Time,TimeItem} from "./style"
import {PagesWrapper,Title} from "../../style/common_style"
import day from 'dayjs'

const Item = Timeline.Item

class Blog extends PureComponent{
  state={
    BlogList : [
      {id:1,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD')},
      {id:2,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1549589936*1000).format('YYYY-MM-DD')}
    ]
  }

  getMain = () => {
    return (<Col span={18}>
      <PagesWrapper>
        <Title>Blog</Title>
        <Divider/>
        <Timeline style={{marginLeft:60,marginTop:20}}>
          {
            this.state.BlogList.map(item=><Item dot={<Time>{item.date}</Time>} key={item.id}>
              <TimeItem><Link to={'/Detail/Blog/'+item.id}>{item.title}</Link></TimeItem>
            </Item>)
          }

        </Timeline>
      </PagesWrapper>
    </Col>)
  }

  getAside = () => {
    return (<Col span={6}>
      <PagesWrapper>
        <div style={{height:300}}/>
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

export default Blog