import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  
  constructor(props){
    super(props)
    this.getToDos = this.getToDos.bind(this)
    this.addToDo = this.addToDo.bind(this)
  }

  getToDos(){
    axios({url: 'http://localhost:3000/to_dos'})
    .then(response => {
      console.log('GET all: ', response.data)
      // this.setState
    })
  }

  addToDo(){
    axios({
      url: "http://localhost:3000/to_dos",
      method: 'POST',
      data: {to_dos: {to_do: 'Get your shit together'}}
    }).then(response => {
      console.log('POST toDo: ', response.data)
    })
  }

  componentDidMount(){
    this.getToDos()
    // this.addToDo()
  }

  render() {
    return (
      <div className="App">
        <h1>Get your shit done!</h1>
      </div>
    );
  }
}

export default App;
