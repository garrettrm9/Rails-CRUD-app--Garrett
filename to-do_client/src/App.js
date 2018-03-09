import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {to_dos: {to_do: ""}}
  }

  getToDos(){
    axios({url: 'http://localhost:3000/to_dos'})
    .then(response => {
      console.log('GET all: ', response.data)
      // this.setState
    })
  }

  componentDidMount(){
    this.getToDos()
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
