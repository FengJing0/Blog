import React, {PureComponent} from 'react'
import {connect} from "react-redux"


import {actionCreators} from "./store"
import AddCategory from './AddCategory'

import {Select} from "antd"

const Option = Select.Option

class CategorySelect extends PureComponent {
  componentDidMount() {
    const {categoryList,getList} = this.props
    if(!categoryList.length){
      getList()
    }
  }

  render() {
    const {value,category, onChange,width,defaultMode} = this.props
    return (<React.Fragment>
        <Select
        value={value||category}
        mode={defaultMode?'':'multiple'}
        style={{minWidth: 150,width:width||'auto'}}
        placeholder="选择分类"
        onChange={category => {
          onChange(category)
        }}
    >
      {
        this.props.categoryList.map(item => (<Option key={item.id}>{item.name}</Option>))
      }
    </Select>
      <AddCategory/>
    </React.Fragment>)
  }
}

const mapStateToProps = state => ({
  categoryList: state.category
})

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(actionCreators.getCategoryListSync())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect)