import React, {PureComponent} from 'react'
import {PagesWrapper} from "../../style/common_style"
import {Col, Divider, Row} from "antd"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

import {scope} from "../../enum"
import {blog} from "../../api"

import {Title, Some} from "./style"

import Markdown from '../../components/Markdown'
import Icon from "../../components/Icon"


class Detail extends PureComponent {
  state = {
    content: '',
    title:'test',
    date:'11日',
    tags:['js','it'],
    author:''
  }

  componentDidMount() {
    const {id, type} = this.props.match.params
    if (type === 'Blog') {
      blog.getBlogDetail(id).then(res=>{
        if(!res.errorCode){
          const {content,title,category,create_time} = res
          this.setState({
            content,
            title,
            tags:category,
            date:create_time
          })
        }
      })
    } else if (type === 'Archives') {
      this.setState({
        content: '<p align="justify">近日任正非的公开信《全面提升软件工程能力与实践，打造可信的高质量产品》刷屏了，作为一个软件工程专业科班出身的软件开发从业者，自然是引起了我（<a href="https://www.weibo.com/dotey">@宝玉xp</a>）的好奇。仔细阅读之下确实让我大吃一惊，看似八股官方文，但细看之下是作者对于软件工程的理解确实非常深刻，各种专业术语信手拈来，比喻恰到好处。</p>\n' +
            '<p align="justify">我对华为的研发其实一直挺好奇的，从传统的硬件公司，到现在软硬件齐头并进，华为手机销量都已经超过了苹果，可见华为的软硬件研发实力早已是全球领先了。公开信中的这一句：</p>\n' +
            '<blockquote><p>二十年前的 IPD 变革，重构了我们的研发模式，实现了从依赖个人、偶然性推出成功产品，到制度化、持续地推出高质量产品的转变。</p></blockquote>\n' +
            '<p align="justify">也揭示了华为的软件研发能做到领先水平的原因。</p>\n' +
            '<p align="justify">华为是在 1999 年开始从 IBM 引进 IPD 的，到今年 2019 年正好 20 年，在过去的 20 年里，IPD 帮助华为从游击队变成了正规军，研发队伍从几千人到几万人，软件产品也覆盖到手机操作系统、应用、云服务。</p>\n' +
            '<p align="justify">我对 IPD 是不甚了解的，只知道 IPD（Integrated Product Development，集成产品开发）是一种产品开发方法，但如果说软件产品的开发方法，我是比较熟悉的，那就是软件工程么！</p>\n' +
            '<p align="justify">任正非发出的这封信的大背景也很特殊，2018 年中美贸易战开始，中兴、华为首当其冲成为美国开刀的对象，跟风站队的澳大利亚、新西兰、英国也跳出来抵制华为，说华为不安全，可能含有间谍软件，窃听国家机密，这帽子一扣是很难扯清的！这就是为什么整封信从标题开始，一共 17 次提到两个关键字：“<strong>可信</strong>”。</p>\n' +
            '<p align="justify">只有让客户觉得华为的产品“可信”，华为才能尽快走出这场危机，那么怎么才能做到可信？</p>\n' +
            '<p align="justify">如果你是餐厅老板，有人造谣你的厨房脏乱差，员工上完厕所不洗手，你怎么办？最好的办法自然是用先进的管理流程，并且让整个做菜的过程尽可能公开透明。</p>\n' +
            '<p align="justify">所以信中有这样一句话：</p>\n' +
            '<blockquote><p>我们要转变观念，追求打造可信的高质量产品，不仅仅是功能、特性的高质量，也包括产品开发到交付过程的高质量。</p></blockquote>\n' +
            '<p align="justify">要转变观念，不再只认结果的质量，还要追求过程质量了！而如何追求过程质量呢？那就是要：“<strong>全面提升软件工程能力和实践</strong>”</p>\n' +
            '<p align="justify">如果信到此为止，也就是个普通官方八股文了。领导们么，可不就是喜欢指个大方向，说你们要用软件工程，要实施软件工程，至于怎么用，那是你们的事情，毕竟做领导的哪有几个真的懂软件工程的，难得的是这封信居然有很多具体怎么做的内容。</p>\n' +
            '<h2>软件项目管理金三角</h2>\n' +
            '<p align="justify">先看这一句：</p>'
      })
    }

  }

  getAuthor = author => {
    if(author){
      return (<React.Fragment>
        &nbsp;&nbsp;&nbsp;&nbsp;
          <Icon name='label_fill' size='18px'/>
          <span>{this.state.author}</span>
          </React.Fragment>)
    }
  }

  getDate = date => {
    if(date){
      return (<React.Fragment>
        <Icon name='activity_fill' size='18px'/>
        <span>{date}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </React.Fragment>)
    }
  }

  getTags = tags => {
    if(tags){
      if(typeof tags[0] === 'object'){
        tags = tags.map(item=>item.name)
      }
      return (<React.Fragment>
        <Icon name='label_fill' size='18px'/>
        <span>{tags.join(',')}</span>
      </React.Fragment>)
    }
  }

  getEdit = () => {
    const {id, type} = this.props.match.params
    if(type === 'Blog'&&this.props.userInfo.scope===scope.Super){
      return <Link to={{
        pathname:'/edit',
        state:id
      }}>编辑</Link>
    }
  }

  getSome = (date,tags,author) => {
    const Author = this.getAuthor(author)
    const Date = this.getDate(date)
    const Tags = this.getTags(tags)

    return (<Some>
      {Date}
      {Tags}
      {Author}
      &nbsp;&nbsp;
      {this.getEdit()}
    </Some>)
  }


  render() {
    const type = this.props.match.params.type
    const {content,title,date,tags,author} = this.state
    return (<Row>
      <Col>
        <PagesWrapper bg='#F8F8FD'>
          <Title>{title}</Title>
          {this.getSome(date,tags,author)}
          <Divider/>
          <PagesWrapper>
            {
              type === 'Blog' ? <Markdown md={content}/> : <div dangerouslySetInnerHTML={{__html: content || '加载中...'}}/>
            }
          </PagesWrapper>
        </PagesWrapper>
      </Col>
    </Row>)
  }
}

const mapStateToProps = state => ({
  userInfo:state.userInfo
})

export default connect(mapStateToProps)(Detail)