import React from 'react';

class List extends React.Component{

  state ={
    list:this.props.initial
  }

  push =(newValue) => {
    this.setState({
     // list:[...this.state.list, newVlaue]
     list:this.state.list.concat(newValue)
    })
  }

  pull =(fn) =>{
    const newList = this.state.list.filter((listItem,index) => {
      return !fn(listItem, index)
    })
    this.setState({list: newList})
  }


  render(){
    return this.props.children({
      list: this.state.list,
      push:this.push,
      pull:this.pull,
    })
  }
}

export default List
