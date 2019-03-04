import React from 'react'
import {connect} from "react-redux"
import {actionCreators} from "./store"

import Modal from '../Modal'
import {message} from "antd"

const formList = [
  {
    label:'分类名称',
    key:'newCategory',
    placeholder:'请输入分类名称'
  }
]

// 提交新分类
const handleOk = (newCategory,props) => {
  const {categoryList, onSubmitNewCategory} = props

  if (!categoryList.find(item => item.name.toLowerCase() === newCategory.toLowerCase())) {
    onSubmitNewCategory(newCategory)
  } else {
    message.error('该分类已存在')
  }
}

const AddCategory = props => <Modal title='添加分类'
                               formList={formList}
                               submit={form=>{handleOk(form.newCategory,props)}}/>


const mapStateToProps = state => ({
  categoryList:state.category
})
const mapDispatchToProps = dispatch => ({
  onSubmitNewCategory(newCategory){
    dispatch(actionCreators.addCategorySync(newCategory))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(AddCategory)