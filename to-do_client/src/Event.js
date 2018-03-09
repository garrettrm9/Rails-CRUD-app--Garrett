import React, { Component } from "react";

class Event extends Component {

  constructor(props) {
    super(props)
    this.state = {isEditing: false, editedEvent: [], editedEventId: ""}
    this.deleteEventHandler = this.deleteEventHandler.bind(this)
    this.editEventHandler = this.editEventHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  deleteEventHandler(e){
    e.preventDefault()
    this.props.deleteEvents(this.props.eventDatum.id)    
  }

  editEventHandler(e){
    e.preventDefault()
    this.setState(prevState => {
      prevState.isEditing = !prevState.isEditing;
      return prevState;
    });
    this.props.editEvents(this.state.editedEvent, this.state.editedEventId)
  }

  changeHandler(e){
    e.preventDefault()
    this.setState({editedEvent: {events:{'event': e.target.value}}})
    this.setState({editedEventId: e.target.name})
  }

  render() {
    const eventDatum = this.props.eventDatum;
    const event = eventDatum.event;
    const id = eventDatum.id;
    if (this.state.isEditing) {
      return(
        <div className="event_form">
          <form onSubmit={this.editEventHandler}>
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
        <span>{event}</span>
        <button onClick={this.deleteEventHandler}>Delete</button>
        <button onClick={this.editEventHandler}>Edit</button>
      </li>
    );
  }
}

export default Event;
