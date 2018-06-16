import React, {Component} from 'react';

console.log('Dynamic module has loaded! See the network tab in dev tools...');

class Dynamic extends Component {
  
  render() {
    return (
      <div className="dynamic">
        Dynamic
      </div>
    );
  }
}

export default Dynamic;