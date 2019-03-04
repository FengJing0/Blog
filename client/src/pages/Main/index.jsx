import React, {PureComponent} from 'react'
import {Switch, Route} from "react-router-dom"
import { BackTop } from 'antd';

import NotFound from '../../components/NotFound'
import Home from "../Home"
import Archives from '../Archives'
import Collections from '../Collections'
import Demo from '../Demo'
import Blog from '../Blog'
import About from '../About'
import Detail from '../Detail'
import Edit from '../Edit'
import Header from "../../components/Header"

import {PagesWrapper} from "./style"


class Main extends PureComponent {
  render() {
    return (
        <React.Fragment>
          <Header/>
          <PagesWrapper>
            <BackTop/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/Blog' component={Blog}/>
              <Route exact path='/Archives' component={Archives}/>
              <Route exact path='/Collections' component={Collections}/>
              <Route exact path='/Demo' component={Demo}/>
              {/*<Route exact path='/About' component={About}/>*/}
              <Route exact path='/Edit' component={Edit}/>
              <Route exact path='/Detail/:type/:id' component={Detail}/>
              <Route exact path='*' component={NotFound}/>
            </Switch>
          </PagesWrapper>
        </React.Fragment>
    )
  }
}

export default Main