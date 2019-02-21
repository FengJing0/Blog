import React,{PureComponent} from 'react'
import {collections,blog} from "../../api"
import Page from "../../components/Page"

class Collections extends PureComponent{
  state = {
    list:[],
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
        key: 'type',
        type: 'select',
        list:[]
      }
    ]
  }

  componentDidMount() {
    collections.getCollectionsApi().then(res=>{
      this.setState({list:res.data})
    })
    blog.getCategoryApi().then(res=>{
      this.setState((state) => {
        let formList = state.formList
        formList[3].list = res
        return {formList}
      })
    })
  }

  handleSubmit = from => {
    console.log(from)
  }

  render() {
    const {list,formList} = this.state
    return <Page type='Collections' list={list} formList={formList} submit={this.handleSubmit}/>
  }
}

export default Collections