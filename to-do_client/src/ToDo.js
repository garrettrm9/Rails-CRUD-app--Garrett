import React, { Component } from "react";

class ToDo extends Component {

  constructor(props) {
    super(props)
    this.state = {isEditing: false, newToDo: [], newToDoId: ""}
    this.deleteToDoHandler = this.deleteToDoHandler.bind(this)
    this.editToDoHandler = this.editToDoHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  deleteToDoHandler(e){
    e.preventDefault()
    this.props.deleteToDo(this.props.toDoDatum.id)    
  }

  editToDoHandler(e){
    e.preventDefault()
    this.setState(prevState => {
      prevState.isEditing = !prevState.isEditing;
      return prevState;
    });
    console.log("editToDoHandler",this.state.newToDo)
    this.props.editToDo(this.state.newToDo, this.state.newToDoId)
  }

  changeHandler(e){
    e.preventDefault()
    this.setState({newToDo: {to_dos:{'to_do': e.target.value}}})
    this.setState({newToDoId: e.target.name})
  }

  render() {
    const toDoDatum = this.props.toDoDatum;
    const toDo = toDoDatum.to_do;
    const id = toDoDatum.id;
    let maybeNewToDo = null;
    if (this.state.isEditing) {
      return(
        <div className="to_do_form">
          <form onSubmit={this.editToDoHandler}>
            <label> Edit this item
               <input onChange={this.changeHandler} type='text' name={id}/>
               <button>Submit</button>
            </label>
          </form>
        </div>          
      )
    }    
    return (
      <li key={id.toString()}>
        <span>{toDo}</span>
        <button onClick={this.deleteToDoHandler}>Delete</button>
        <button onClick={this.editToDoHandler}>Edit</button>
      </li>
    );
  }
}

export default ToDo;
