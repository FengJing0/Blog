import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

import {List} from "./style"
import {PagesWrapper, Title} from "../../style/common_style"

import {Col, Divider, Row} from "antd"
import Modal from '../Modal'
import Tag from '../Tag'

import {scope} from "../../enum"
import {actionCreators} from "../CategorySelect/store"

class Page extends PureComponent {
  static propTypes = {
    formList: PropTypes.array,
    submit: PropTypes.func
  }

  componentDidMount() {
    const {categoryList, getList} = this.props
    if (categoryList.length === 0) {
      getList()
    }
  }


  handleSubmit = form => {
    const {submit} = this.props
    submit && submit(form)
  }

  getModal = type => {
    return <Modal title={type}
                  formList={this.props.formList}
                  submit={form => this.handleSubmit(form)}/>
  }

  getEditBtn = (type, userInfo) => {
    if (userInfo.scope === scope.Super) {
      switch (type) {
        case 'Blog':
          return <Link to='/edit'>写博客</Link>
        case 'Collections':
          return this.getModal('新增收藏')
        case 'Demo':
          return this.getModal('新增Demo')
        default:
          return null
      }

    }
  }

  getList = (item, type) => {
    if (type === 'Collections' || type === 'Demo') {
      return (<List key={item.id}>
        <a href={item.url} target='_blank' rel='noopener noreferrer'>{item.title}</a>&nbsp;
        <Tag type={item.category}/>
        <p>{item.summary}</p>
      </List>)
    } else {
      return (<List key={item.id}>
        <span>{item.create_time}</span>&nbsp;&nbsp;
        <Link to={`/Detail/${type}/${item.id}`}>{item.title}</Link>&nbsp;
        <Tag type={item.category}/>
      </List>)
    }
  }

  getMain = ({type, list, userInfo}) => {
    return (<Col span={18}>
      <PagesWrapper>
        <Title>{type} {this.getEditBtn(type, userInfo)}</Title>
        <Divider/>
        <ul>
          {
            list.length > 0 ?
                list.map(item => this.getList(item, type)) :
                <div>暂无数据...</div>
          }
        </ul>
      </PagesWrapper>
    </Col>)
  }

  getAside = props => {
    return (<Col span={6}>
      <PagesWrapper padding={props.padding}>
        {props.children}
      </PagesWrapper>
    </Col>)
  }

  render() {
    return (<Row gutter={16}>
      {this.getMain(this.props)}
      {this.getAside(this.props)}
    </Row>)
  }
}


const mapStateToProps = state => ({
  userInfo: state.userInfo,
  categoryList: state.category
})

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(actionCreators.getCategoryListSync())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
