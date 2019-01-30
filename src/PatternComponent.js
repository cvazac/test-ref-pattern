import React, { PureComponent } from 'react';
import ChildComponent from './ChildComponent';

const static_empty_object = {}
class PatternComponent extends PureComponent {
  componentWillUpdate() {
    window._dur = -1 * performance.now()
  }
  componentDidUpdate() {
    window._dur += performance.now()
    console.info('componentWillUpdate() => componentDidUpdate() duration', window._dur)
  }
  render() {
    return (
        <div>
          <ChildComponent prop={{}} />
        </div>
    )
  }
}

export default PatternComponent;
