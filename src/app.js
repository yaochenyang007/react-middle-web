/*
 * @Author: chenyang.yao
 * @Date: 2020-01-17 16:07:39
 * @LastEditTime : 2020-01-17 16:36:04
 * @LastEditors  : chenyang.yao
 */
import React from 'react'
import { Route } from 'react-router-dom'

import Login from './container/login'
import Register from './container/register'

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/Register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    )
  }
}

export default App