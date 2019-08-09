import React from 'react';

class List extends React.Component{

  state ={
    list:this.props.initial
  }

  push =(newValue) => {
    this.setState({
      list:[...this.state.list, newVlaue]
    })
  }

  pull =(fn) =>{
    const mewList = this.state.list.filter((listItem,index) => {
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
