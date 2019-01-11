import React, { PureComponent } from 'react';
import ChildComponent from './ChildComponent';

class PatternComponent extends PureComponent {
  render() {
    return (
      <ChildComponent prop={{}} />
    );
  }
}

export default PatternComponent;
