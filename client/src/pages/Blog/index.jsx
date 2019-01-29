import React,{PureComponent} from 'react'
import Page from '../../components/Page'

import day from 'dayjs'


class Blog extends PureComponent{
  state={
    BlogList : [
      {id:1,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1548578936*1000).format('YYYY-MM-DD HH:MM:ss')},
      {id:2,title:'《Javascript高级程序设计》读书笔记3',gist:'8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',date:day(1549589936*1000).format('YYYY-MM-DD HH:MM:ss')}
    ]
  }

  render() {
    return <Page type='Blog' list={this.state.BlogList}/>
  }
}

export default Blog