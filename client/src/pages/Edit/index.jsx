import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {message} from "antd"


import EditComponent from "../../components/Edit"
import {blog} from "../../api"
import {scope} from "../../enum"


class Edit extends PureComponent {
  state = {
    categoryList: [],
    isEdit: false,
    id: null
  }

  componentWillMount() {
    const id = this.props.location.state*1
    this.setState({
      isEdit: !!id,
      id
    })
  }


  componentDidMount() {
    blog.getCategoryApi().then(res => {
      if (!res.errorCode) {
        this.setState({categoryList: res})
      }
    })

  }

  onSubmit = ({content, category, title}) => {
    const api = this.state.isEdit ?
        blog.updateBlogApi({content, category, title, id: this.state.id}) :
        blog.addBlogApi({content, category, title})

    api.then(res => {
        if(!res.errorCode){
          message.success(res.msg)
          this.props.history.push('/Blog')
        }else{
          message.error(res.msg)
        }
    })
  }

  onSubmitNewCategory = category => {
    blog.addCategoryApi({name: category}).then(res => {
      if (!res.errorCode) {
        this.setState({categoryList: res})
      }
    })
  }

  render() {
    if (this.props.userInfo.scope !== scope.Super) {
      return <Redirect to='/'/>
    } else {
      const {categoryList,id} = this.state
      return <EditComponent categoryList={categoryList}
                            id={id}
                            onSubmit={this.onSubmit}
                            onSubmitNewCategory={this.onSubmitNewCategory}/>
    }
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Edit)