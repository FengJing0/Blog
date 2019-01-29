import React, {PureComponent} from 'react'
import day from 'dayjs'

import Page from '../../components/Page'


class Archives extends PureComponent {
  state = {
    BlogList: [
      {
        id: 1,
        title: '《Javascript高级程序设计》读书笔记3',
        gist: '8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',
        date: day(1548578936 * 1000).format('YYYY-MM-DD'),
        tags: ['it', 'js']
      },
      {
        id: 2,
        title: '《Javascript高级程序设计》读书笔记3',
        gist: '8.BOM ,10.DOM,11.DOM扩展,12.DOM2DOM3',
        date: day(1548578936 * 1000).format('YYYY-MM-DD')
      }
    ]
  }


  render() {
    return <Page type='Archives' list={this.state.BlogList}/>
  }
}

export default Archives