import React, { Component } from 'react'

class Counter05 extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidUpdate() {
    const count = this.state.count
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000)
  }
  // handleClick() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Counter05 click me
        </button>
      </div>
    )
  }
}

export default Counter05