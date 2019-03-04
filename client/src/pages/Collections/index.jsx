import React, {PureComponent} from 'react'
import {collections} from "../../api"
import Page from "../../components/Page"
import {connect} from "react-redux"
import CategorySelect from "../../components/CategorySelect"

import {Calendar, message} from "antd"


class Collections extends PureComponent {
  state = {
    list: [],
    formList: [
      {
        label: '标题',
        key: 'title',
        placeholder: '请输入标题',
      },
      {
        label: '链接',
        key: 'url',
        placeholder: '请输入链接',
      },
      {
        label: '简介',
        key: 'summary',
        placeholder: '请输入简介',
      },
      {
        label: '分类',
        key: 'category',
        component: () => <CategorySelect defaultMode={true} width={250}/>
      }
    ]
  }

  componentDidMount() {
    this.getData()
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.categoryList !== nextState.formList[3].list) {
      let formList = nextState.formList
      formList[3].list = nextProps.categoryList
      return {formList}
    }
    return null
  }

  getData = () => {
    collections.getCollectionsApi().then(res => {
      this.setState({list: res.data})
    })
  }

  handleSubmit = from => {
    collections.addCollectionsApi(from).then(res=>{
      if(!res.errorCode){
        this.getData()
        message.success('添加成功！')
      }
    })
  }

  render() {
    const {list, formList} = this.state
    return <Page type='Collections' list={list} formList={formList} submit={this.handleSubmit}>
      <Calendar fullscreen={false}/>
    </Page>
      }
}

const mapStateToProps = state => ({
  categoryList: state.category
})

export default connect(mapStateToProps)(Collections)