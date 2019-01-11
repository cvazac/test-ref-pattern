import React, { PureComponent } from 'react';
import ChildComponent from './ChildComponent';

class PatternComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    window._dur = -1 * performance.now()
  }
  componentDidUpdate() {
    window._dur += performance.now()
    console.info('duration', window._dur)
  }
  render() {
    var markup = []
    for (let i = 0; i < 100000; i++) {
      markup.push(<span prop1={{}} key={i} />)
    }

    return (
        <div>
          <!--ChildComponent prop={{}} /-->
          {markup.map(m => m)}
        </div>
    )
  }
}

export default PatternComponent;
