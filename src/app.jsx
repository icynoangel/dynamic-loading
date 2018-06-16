import React, {Component} from 'react';

class App extends Component {
  
  state = {
    show: false,
    comp: null
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // Lazy loading using webpack webpackChunkName
    // https://webpack.js.org/guides/code-splitting/#dynamic-imports
    import(/* webpackChunkName: "dynamic" */ './dynamic').then(module => {      
      this.setState({
        show: !this.state.show,
        comp: module.default
      });
    });
  }

  render() {
    return (
      <div className="app">
        This is the main client app
        <button onClick={this.toggle}>Load</button>
        {this.state.show && <this.state.comp />}
      </div>
    );
  }
}

export default App;
