import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter,Route,Switch} from "react-router-dom"

import {ThemeProvider} from "styled-components"
import {Provider} from "react-redux"

import store from './redux/store'
import Main from "./pages/Main"
import Register from "./pages/Register"
import Login from "./pages/Login"

import theme from "./style/theme"
import 'github-markdown-css'
import {Iconfont} from "./assets/iconfont/iconfont"
import './style/common.less'
import './style/antd.less'
import 'simplemde/dist/simplemde.min.css'

import {LocaleProvider} from "antd"
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


ReactDOM.render((
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Iconfont/>
          <LocaleProvider locale={zhCN}>
          <BrowserRouter>
            <Switch>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login}/>
              <Route  component={Main}/>
            </Switch>
          </BrowserRouter>
          </LocaleProvider>
        </Provider>
      </ThemeProvider>
    </React.Fragment>

), document.getElementById('root'))