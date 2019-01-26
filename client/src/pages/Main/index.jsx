import React, {PureComponent} from 'react'
import {Switch, Route} from "react-router-dom"

import NotFound from '../../components/NotFound'
import Home from "../Home"
import Archives from '../Archives'
import Collections from '../Collections'
import Categories from '../Categories'
import About from '../About'
import Header from "../../components/Header"

import {PagesWrapper} from "./style"


class Main extends PureComponent {
  render() {
    return (
        <React.Fragment>
          <Header/>
          <PagesWrapper>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/Archives' component={Archives}/>
              <Route exact path='/Collections' component={Collections}/>
              <Route exact path='/Categories' component={Categories}/>
              <Route exact path='/About' component={About}/>
              <Route exact path='*' component={NotFound}/>
            </Switch>
          </PagesWrapper>
        </React.Fragment>
    )
  }
}

export default Main