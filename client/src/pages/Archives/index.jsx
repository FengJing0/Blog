import React, {PureComponent} from 'react'
// import day from 'dayjs'

import Page from '../../components/Page'
import {Calendar} from "antd"


class Archives extends PureComponent {
  state = {
    BlogList: []
  }


  render() {
    return <Page type='Archives' list={this.state.BlogList}>
      <Calendar fullscreen={false}/>
    </Page>
  }
}

export default Archives