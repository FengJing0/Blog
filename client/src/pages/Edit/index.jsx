import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import EditComponent from "../../components/Edit"
import {blog} from "../../api"
import {scope} from "../../enum"


class Edit extends PureComponent {
  state = {
    categoryList: [],
    isEdit: false,
    id: 1
  }

  componentDidMount() {
    const id = this.props.location.state
    this.setState({
      isEdit: !!id,
      id
    })
    blog.getCategoryApi().then(res => {
      if (!res.errorCode) {
        this.setState({categoryList: res.data})
      }
    })
    if(!!id){
      blog.getBlogDetail(id).then(res=>{
        if(!res.errorCode){
          const {content,title,category,create_time} = res.data
          console.log(res.data)
          // this.setState({
          //   content,
          //   title,
          //   tags:category,
          //   date:create_time
          // })
        }
      })
    }
  }

  onSubmit = ({content, category, title}) => {
    const api = this.state.isEdit ?
        blog.updateBlogApi({content, category, title, id: this.state.id}) :
        blog.addBlogApi({content, category, title})
    api.then(res => {
      if (!res.errorCode) {
        console.log(res.data)
      }
    })
  }

  onSubmitNewCategory = category => {
    blog.addCategoryApi({name: category}).then(res => {
      if (!res.errorCode) {
        this.setState({categoryList: res.data})
      }
    })
  }

  render() {
    if (this.props.userInfo.scope !== scope.Super) {
      return <Redirect to='/'/>
    } else {
      const {categoryList} = this.state
      return <EditComponent categoryList={categoryList} onSubmit={this.onSubmit}
                            onSubmitNewCategory={this.onSubmitNewCategory}/>
    }
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Edit)