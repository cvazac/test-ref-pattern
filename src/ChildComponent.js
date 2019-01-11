import React, { PureComponent } from 'react'

window.__renderCount = 0
class Child extends PureComponent {
  render() {
    window.__renderCount++
    return (
      <p/>
    )
  }
}

export default Child
