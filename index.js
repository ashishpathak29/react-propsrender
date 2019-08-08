import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import React, { Component, Fragment } from 'react'
import State from './Components/State';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Fragment>
      <State initial={{loading: false, data: null}}>
         {() => {
           return <div>Heelo</div>
         }}
      </State>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));