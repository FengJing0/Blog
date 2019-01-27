import React, {PureComponent} from 'react'
import {Col, Row} from "antd"
import day from 'dayjs'
import CardList from '../../components/CardList'

import {PagesWrapper} from "../../style/common_style"


class Home extends PureComponent {
  state={
    BlogList : [
      {id:1,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD hh:mm:ss')},
      {id:2,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD hh:mm:ss')}
    ]
  }

  getMain = () => {
    return (<Col span={18}>
      <CardList title='Blog' list={this.state.BlogList} />
      <CardList title='Archives' list={this.state.BlogList}/>
      <CardList title='Collections' list={this.state.BlogList}/>
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

export default Home