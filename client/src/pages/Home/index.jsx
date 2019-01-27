import React, {PureComponent} from 'react'
import {Col, Row,Anchor} from "antd"
import day from 'dayjs'
import CardList from '../../components/CardList'

const { Link } = Anchor;

class Home extends PureComponent {
  state={
    BlogList : [
      {id:1,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD hh:mm:ss')},
      {id:2,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD hh:mm:ss')},
      {id:3,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD hh:mm:ss')},
      {id:4,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD hh:mm:ss')},
      {id:5,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD hh:mm:ss')}
    ]
  }

  getMain = () => {
    return (<Col span={18} id='body'>
      <CardList id='Blog' title='Blog' list={this.state.BlogList} />
      <CardList id='Archives' title='Archives' list={this.state.BlogList}/>
      <CardList id='Collections' title='Collections' list={this.state.BlogList}/>
    </Col>)
  }

  getAside = () => {
    return (<Col span={6}>
        <Anchor target={() => document.getElementById('body')}>
          <Link href="#Blog" title="Blog" />
          <Link href="#Archives" title="Archives" />
          <Link href="#Collections" title="Collections"/>
        </Anchor>,
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