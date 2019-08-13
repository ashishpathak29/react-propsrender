import React, { Component,Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import State from './Components/State';
import List from './Components/List'; 

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
      <List initial ={["Apple","Banana"]}>
      {({list, pull, push}) =>(
          <Fragment>
            <div>
            <ul>{list.map((l,i) => <li onClick={() =>{pull((listItem, index) =>{          return i === index})}} key={i}>{l}</li>)}</ul>
            </div>
          <form onSubmit = {(e) =>{
                e.preventDefault();
                push(this.textRef.value)
                this.textRef.value = ""
                }}>
              <input ref={(node)=>this.textRef = node} type ="text" />
              <button type="submit">Add Todo</button>
          </form>
          </Fragment>
      )}
      </List>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));