import React, { Component,Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import State from './Components/State';


class App extends Component {
  render() {
    return (
      <Fragment>
      <State initial={{loading: false, name:"ashish"}}>
      {({state, setState})=>{
        return <div>{JSON.stringify(state)}
        <button onClick={()=>setState({loading:true, name:"NTT DATA"})}>Toggle button</button>
        </div> 
      }}
      </State>
      <State initial={{count:0}}>
      {({state, setState})=>{
        return <div>{JSON.stringify(state)}
        <button onClick={()=>setState({count: state.count + 1})}>Count Button</button>
        </div> 
      }}
      </State>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));