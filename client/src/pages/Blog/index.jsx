import React, {PureComponent} from 'react'
import Page from '../../components/Page'

import {blog} from "../../api"
import {Calendar} from "antd"

import {Pot} from "./style"


class Blog extends PureComponent {
  state = {
    BlogList: [],
    dateList: []
  }

  componentDidMount() {
    blog.getBlogApi().then(res => {
      if (!res.errorCode) {
        this.setState({
          BlogList: res.data.data,
          dateList: res.data.data.map(item => item.create_time.slice(0, 10))
        })
      }
    })
  }

  onSelect = date => {
    const dateFormat = date.format('YYYY-MM-DD')
    if (this.state.dateList.includes(dateFormat)) {
      console.log(true)
    }
  }

  dateCellRender = date => {
    const dateFormat = date.format('YYYY-MM-DD')
    if (this.state.dateList.includes(dateFormat)) {
      return <Pot/>
    }
  }


  render() {
    return (<Page type='Blog' list={this.state.BlogList} padding='15px'>
      <Calendar fullscreen={false} onSelect={this.onSelect} dateCellRender={this.dateCellRender}/>
    </Page>)
  }
}

export default Blog