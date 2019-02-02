import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import EditComponent from "../../components/Edit"
import {blog} from "../../api"


class Edit extends PureComponent {
  state = {
    categoryList:[]
  }

  componentDidMount() {
    blog.getCategoryApi().then(res=>{
      if(!res.errorCode){
        this.setState({categoryList:res.data})
      }
    })
  }

  onSubmit = ({content,category}) => {
    blog.addBlogApi({content,category,title:'title'}).then(res=>{
      if(!res.errorCode){
        console.log(res.data)
      }
    })
  }

  onSubmitNewCategory = category => {
    blog.addCategoryApi({name:category}).then(res=>{
      if(!res.errorCode){
        this.setState({categoryList:res.data})
      }
    })
  }

  render() {
    if (this.props.userInfo.scope !== 32) {
      return <Redirect to='/'/>
    } else {
      const {categoryList} = this.state
      return <EditComponent categoryList={categoryList} onSubmit={this.onSubmit} onSubmitNewCategory={this.onSubmitNewCategory}/>
    }
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Edit)