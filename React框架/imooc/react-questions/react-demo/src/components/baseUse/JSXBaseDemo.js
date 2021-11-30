import React, { Component } from 'react'

import './style.css'

class JSXBaseDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'festinalente',
      imgUrl: 'https://avatars.githubusercontent.com/u/63391057?v=4'
    }
  }
  render() {
    // 获取变量
    // const pElem = <p>{this.state.name}</p>
    // return pElem

    // 表达式
    const exprElem = <p>{this.state.flag ? 'yes' : 'no'}</p>
    return exprElem
  }
}