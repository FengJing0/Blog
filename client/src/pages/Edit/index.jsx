import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import EditComponent from "../../components/Edit"
import {blog} from "../../api"


class Edit extends PureComponent {
  state = {
    typeList:[{name: 'it', id: 1}]
  }

  componentDidMount() {
    blog.getCategoryApi().then(res=>{
      if(!res.errorCode){
        this.setState({typeList:res.data})
      }
    })
  }

  onSubmit = ({content,types}) => {
    console.log(content,types)
  }

  onSubmitNewType = type => {
    blog.addCategoryApi({name:type}).then(res=>{
      if(!res.errorCode){
        this.setState({typeList:res.data})
      }
    })
  }

  render() {
    if (this.props.userInfo.scope !== 32) {
      return <Redirect to='/'/>
    } else {
      const {typeList} = this.state
      return <EditComponent typeList={typeList} onSubmit={this.onSubmit} onSubmitNewType={this.onSubmitNewType}/>
    }
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Edit)