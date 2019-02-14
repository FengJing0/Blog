import React, {PureComponent} from 'react'
import {Col, Row,Anchor} from "antd"
import CardList from '../../components/CardList'
import {home} from "../../api"

const { Link } = Anchor;

class Home extends PureComponent {
  state={
    BlogList : [],
    ArchivesList:[],
    CollectionsList:[],
  }

  componentDidMount() {
    home.getHomeList().then(res=>{
      if(!res.errorCode){
        // console.log(res.data)
        this.setState({
          BlogList:res.data.BlogList.data,
          ArchivesList:res.data.ArchivesList.data,
          CollectionsList:res.data.CollectionsList.data,
        })
      }
    })
  }

  getList = (type,list) => {
    if(list.length){
      return <CardList id={type} title={type} list={list} />
    }
  }

  getLink = (type,list) => {
     if(list.length){
       return <Link href={'#'+type} title={type} />
     }
  }


  getMain = () => {
    return (<Col span={18} id='body'>
      {this.getList('Blog',this.state.BlogList)}
      {this.getList('Archives',this.state.ArchivesList)}
      {this.getList('Collections',this.state.CollectionsList)}
    </Col>)
  }

  getAside = () => {
    return (<Col span={6}>
        <Anchor target={() => document.getElementById('body')}>
          {this.getLink('Blog',this.state.BlogList)}
          {this.getLink('Archives',this.state.ArchivesList)}
          {this.getLink('Collections',this.state.CollectionsList)}
        </Anchor>,
    </Col>)
  }


  render() {
    return <Row gutter={16}>
      {this.getMain()}
      {this.getAside()}
    </Row>
  }
}

export default Home