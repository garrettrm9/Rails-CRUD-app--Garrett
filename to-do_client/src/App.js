import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ToDos from "./ToDos";
import Events from "./Events"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gottenToDos: [], gottenEvents: [] };

    this.getToDos = this.getToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.addEvents = this.addEvents.bind(this);
    this.editEvents = this.editEvents.bind(this);
    this.deleteEvents = this.deleteEvents.bind(this);
  }

  //Get all todo list items
  getToDos() {
    axios({ url: "http://localhost:3000/to_dos" }).then(response => {
      // console.log("GET all: ", response.data);
      this.setState({ gottenToDos: response.data });
      // console.log("GET all post-state: ", this.state.gottenToDos);            
    });
  }

  //Post new todo list item
  addToDo(newToDo) {
    // console.log("addToDo",newToDo)
    axios({
      url: "http://localhost:3000/to_dos",
      method: "POST",
      data: newToDo
    }).then(response => {
      // console.log("POST toDo: ", response.data);
      this.getToDos()      
    });
  }

  //Edit todo list item
  editToDo(toDo, id) {
    // console.log("editToDo",toDo)
    axios({
      url: `http://localhost:3000/to_dos/${id}`,
      method: "PUT",
      data: toDo
    }).then(response => {
      // console.log("PUT toDo: ", response.data);
      this.getToDos();
    });
  }

  //Delete todo list item
  deleteToDo(id) {
    axios({
      url: `http://localhost:3000/to_dos/${id}`,
      method: "DELETE"
    }).then(response => {
      // console.log("DELETE toDO:", response.data);
      this.getToDos();
    });
  }

  getEvents(){
    axios({ url: "http://localhost:3000/events" }).then(response => {
      console.log("getEvents: ", response.data);
      this.setState({ gottenEvents: response.data });
      console.log("getEvents post-state:", this.state.gottenEvents);            
    });
  }

  addEvents(newEvent){
    console.log("addEvents",newEvent)
    axios({
      url: "http://localhost:3000/events",
      method: "POST",
      data: newEvent
    }).then(response => {
      console.log("addEvents post-state:", response.data);
      this.getEvents()      
    });
  }

  editEvents(event, id){
    console.log("editEvents",event)
    axios({
      url: `http://localhost:3000/events/${id}`,
      method: "PUT",
      data: event
    }).then(response => {
      console.log("editEvents post-state", response.data);
      this.getEvents();
    });
  }

  deleteEvents(id){
    axios({
      url: `http://localhost:3000/events/${id}`,
      method: "DELETE"
    }).then(response => {
      console.log("deleteEvents post-state", response.data);
      this.getEvents();
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
        <h2>To-do list</h2>
        <ToDos
          getToDos={this.getToDos}
          addToDo={this.addToDo}
          editToDo={this.editToDo}
          deleteToDo={this.deleteToDo}
          gottenToDos={this.state.gottenToDos}
        />
        <h2>Your events</h2>
        <Events
          getEvents={this.getEvents}
          addEvents={this.addEvents}
          editEvents={this.editEvents}
          deleteEvents={this.deleteEvents}
          gottenEvents={this.state.gottenEvents}
        />
      </div>
    );
  }
}

export default App;
