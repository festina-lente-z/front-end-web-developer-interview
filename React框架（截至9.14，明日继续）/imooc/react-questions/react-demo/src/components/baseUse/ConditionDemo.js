import React, { Component } from 'react'

import './style.css'

class ConditionDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'black'
    }
  }
  render() {
    const blackBtn = <button className="btn-black">black btn</button>
    const whiteBtn = <button className="btn-white">white btn</button>
    if (this.state.theme === 'black') {
      return blackBtn
    } else {
      return whiteBtn
    }
  }
}

export default ConditionDemo