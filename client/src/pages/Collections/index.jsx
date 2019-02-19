import React,{PureComponent} from 'react'
import {collections} from "../../api"
import Page from "../../components/Page"


class Collections extends PureComponent{
  state = {
    list:[]
  }

  componentDidMount() {
    collections.getCollectionsApi().then(res=>{
      console.log(res.data)
      this.setState({list:res.data})
    })
  }


  render() {
    return <Page type='Collections' list={this.state.list}/>
  }
}

export default Collections