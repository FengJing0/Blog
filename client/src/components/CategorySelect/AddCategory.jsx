import React from 'react'

import Modal from '../Modal'
import {message} from "antd"

const formList = [
  {
    label:'分类名称',
    key:'newCategory',
    placeholder:'请输入分类名称'
  }
]

const handleOk = (newCategory,props) => {
  const {categoryList, onSubmitNewCategory} = props

  if (!categoryList.find(item => item.name.toLowerCase() === newCategory.toLowerCase())) {
    onSubmitNewCategory(newCategory)
  } else {
    message.error('该分类已存在')
  }

}

export default props => <Modal title='添加分类'
                               formList={formList}
                               submit={form=>{handleOk(form.newCategory,props)}}/>