import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ToDos from "./ToDos";

class App extends Component {
  constructor(props) {
    super(props);
    this.getToDos = this.getToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  //Get all todo list items
  getToDos() {
    axios({ url: "http://localhost:3000/to_dos" }).then(response => {
      console.log("GET all: ", response.data);
      // this.setState
    });
  }

  //Post new todo list item
  addToDo(newToDo) {
    axios({
      url: "http://localhost:3000/to_dos",
      method: "POST",
      data: newToDo
    }).then(response => {
      console.log("POST toDo: ", response.data);
    });
  }

  //Edit todo list item
  editToDo(toDo) {
    axios({
      url: `http://localhost:3000/to_dos/${toDo.to_dos.id}`,
      method: "PUT",
      data: toDo
    }).then(response => {
      console.log("PUT toDo: ", response.data);
      this.getToDos();
    });
  }

  //Delete todo list item
  deleteToDo(toDo) {
    axios({
      url: `http://localhost:3000/to_dos/${toDo.to_dos.id}`,
      method: "DELETE"
    }).then(response => {
      console.log("DELETE toDO: ", response.data);
      this.getToDos();
    });
  }

  // componentDidMount(){
  //   this.addToDo()
  //   this.editToDo({to_dos: {id: 7, to_do: 'EDIT THIS CRAP'}})
  //   this.deleteToDo({to_dos:{id: 6}})
  // }

  render() {
    return (
      <div className="App">
        <h1>Get your shit done!</h1>
        <ToDos
          getToDos={this.getToDos}
          addToDo={this.addToDo}
          editToDo={this.editToDo}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}

export default App;
