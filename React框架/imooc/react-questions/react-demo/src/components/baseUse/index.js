import React, { Component, Fragment } from 'react'
import JSXBaseDemo from './JSXBaseDemo'
// import ConditionDemo from './ConditionDemo'
// import ListDemo from './ListDemo'
// import EventDemo from './EventDemo'
// import FormDemo from './FormDemo'
// import PropsDemo from './PropsDemo'
// import StateDemo from './StateDemo'

class BaseUseDemo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <Fragment>
      <JSXBaseDemo/>
      {/* <ConditionDemo/> */}
      {/* <ListDemo/> */}
      {/* <EventDemo/> */}
      {/* <FormDemo/> */}
      {/* <PropsDemo/> */}
      {/* <StateDemo/> */}
    </Fragment>
  }
}