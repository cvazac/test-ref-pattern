import React, { PureComponent } from 'react'
import Parent from './PatternComponent'

class GrandparentComponent extends PureComponent {
  state = {
    counter: 0,
    message: "Testing...",
    success: undefined
  }
  constructor() {
    super()
    setTimeout(() => {
      var renderCount = window.__renderCount

      this.setState((state, props) => {
        return {counter: state.counter + 1}
      }, function() {
        const newState = {}
        if (renderCount !== window.__renderCount) {
          newState.success = false
          newState.message = 'PatternComponent is NOT optimized.'
        }
        else {
          newState.success = true
          newState.message = 'PatternComponent is optimized.'
        }
        this.setState(newState)
      })
    })
  }
  render() {
    const {state: {counter, message, success}} = this
    const style = {}
    if (success === true)
      style.color = 'green'
    else if (success === false)
      style.color = 'red'
    return (
        <div>
          <Parent counter={counter}/>
          <code style={style}>{message}</code>
        </div>
    )
  }
}

export default GrandparentComponent
