import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ToDos from "./ToDos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gottenToDos: [] };

    this.getToDos = this.getToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  //Get all todo list items
  getToDos() {
    axios({ url: "http://localhost:3000/to_dos" }).then(response => {
      console.log("GET all: ", response.data);
      this.setState({ gottenToDos: response.data });
      // console.log("GET all post-state: ", this.state.gottenToDos);            
    });
  }

  //Post new todo list item
  addToDo(newToDo) {
    console.log("addToDo",newToDo)
    axios({
      url: "http://localhost:3000/to_dos",
      method: "POST",
      data: newToDo
    }).then(response => {
      console.log("POST toDo: ", response.data);
      this.getToDos()      
    });
  }

  //Edit todo list item
  editToDo(toDo, id) {
    console.log("editToDo",toDo)
    axios({
      url: `http://localhost:3000/to_dos/${id}`,
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
      url: `http://localhost:3000/to_dos/${toDo}`,
      method: "DELETE"
    }).then(response => {
      console.log("DELETE toDO: ", response.data);
      this.getToDos();
    });
  }

  // componentDidMount(){
      // this.getToDos()
  //   this.addToDo()
  //   this.editToDo({to_dos: {id: 7, to_do: 'EDIT THIS CRAP'}})
  //   this.deleteToDo({to_dos:{id: 6}})
  // }

  render() {
    return (
      <div className="App">
        <h1>Get your stuff done!</h1>
        <ToDos
          getToDos={this.getToDos}
          addToDo={this.addToDo}
          editToDo={this.editToDo}
          deleteToDo={this.deleteToDo}
          gottenToDos={this.state.gottenToDos}
        />
      </div>
    );
  }
}

export default App;
