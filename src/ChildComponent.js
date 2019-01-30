import React, { PureComponent } from 'react'

window.__renderCount = 0
class ChildComponent extends PureComponent {
  render() {
    window.__renderCount++
    return <p/>
  }
}

export default ChildComponent
