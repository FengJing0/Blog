import React, {PureComponent} from 'react'
import {Col, Row,Anchor} from "antd"
import CardList from '../../components/CardList'
import {blog} from "../../api"

const { Link } = Anchor;

class Home extends PureComponent {
  state={
    BlogList : [],
    ArchivesList:[],
    CollectionsList:[],
  }

  componentDidMount() {
    blog.getBlogApi().then(res=>{
      if(!res.errorCode){
        // console.log(res.data)
        this.setState({BlogList:res.data.data})
      }
    })
  }


  getMain = () => {
    return (<Col span={18} id='body'>
      <CardList id='Blog' title='Blog' list={this.state.BlogList} />
      <CardList id='Archives' title='Archives' list={this.state.ArchivesList}/>
      <CardList id='Collections' title='Collections' list={this.state.CollectionsList}/>
    </Col>)
  }

  getAside = () => {
    return (<Col span={6}>
        <Anchor target={() => document.getElementById('body')}>
          <Link href="#Blog" title="Blog" />
          <Link href="#Archives" title="Archives" />
          <Link href="#Collections" title="Collections"/>
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