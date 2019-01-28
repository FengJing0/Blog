import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter,Route,Switch} from "react-router-dom"

import {ThemeProvider} from "styled-components"
import {Provider} from "react-redux"

import store from './redux/store'
import Main from "./pages/Main"
import Register from "./pages/Register"
import Login from "./pages/Login"

import 'github-markdown-css'
import {Iconfont} from "./assets/iconfont/iconfont"
import './style/common.less'
import './style/antd.less'

const theme = {
  primary:'#1890ff',
  headerbg:'#2d2d2d',
  subFont:'#9d9d9d',
  titleColor:'#0085a1'
}

ReactDOM.render((
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Iconfont/>
          <BrowserRouter>
            <Switch>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login}/>
              <Route  component={Main}/>
            </Switch>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </React.Fragment>

), document.getElementById('root'))