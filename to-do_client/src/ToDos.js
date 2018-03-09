import React, { Component } from "react";
import ToDo from "./ToDo";

class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {newToDos: []}
    this.renderToDos = this.renderToDos.bind(this);
    this.changeHandler = this.changeHandler.bind(this)
    this.submitToDo = this.submitToDo.bind(this)
  }

  renderToDos(toDoDatum, index) {
    return <ToDo
              toDoDatum={toDoDatum}
              index={index}
              deleteToDo={this.props.deleteToDo}
              editToDo={this.props.editToDo}
            />;
  }

  changeHandler(e){
    e.preventDefault()
    this.setState({newToDos: {to_dos:{'to_do': e.target.value}}})
  }

  submitToDo(e){
    e.preventDefault()
    this.props.addToDo(this.state.newToDos)
    // console.log("submitToDo:",this.state.newToDos)    
  }

  componentDidMount() {
    this.props.getToDos();
  }

  render() {
    const toDos = this.props.gottenToDos.map(this.renderToDos);

    return (
      <div className="to_do_container">
        <ul className="to_do_item">{toDos}</ul>
        <div className="to_do_form">
          <form onSubmit={this.submitToDo}>
            <label> Add to your to-do list
              <input onChange={this.changeHandler} type='text'/>
              <button>Submit</button>
            </label>
          </form>
        </div>
      </div>        
    );
  }
}

export default ToDos;
