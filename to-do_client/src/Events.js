import React, { Component } from "react";
import Event from "./Event"

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {newEvents: []}
    this.renderEvents = this.renderEvents.bind(this);
    this.changeHandler = this.changeHandler.bind(this)
    this.submitEvents = this.submitEvents.bind(this)
  }

  renderEvents(eventDatum, index) {
    return <Event
              eventDatum={eventDatum}
              index={index}
              deleteEvents={this.props.deleteEvents}
              editEvents={this.props.editEvents}
              addEvent={this.props.addEvent}
            />
  }

  changeHandler(e){
    e.preventDefault()
    this.setState({newEvents: {events:{'event': e.target.value}}})
  }

  submitEvents(e){
    e.preventDefault()
    this.props.addEvents(this.state.newEvents)
  }

  componentDidMount(){
    this.props.getEvents()
  }

  render(){
    const events = this.props.gottenEvents.map(this.renderEvents)
  
    return(
      <div className="event_container">
        <ul className="event_item">{events}</ul>
        <div className="event_form">
          <form onSubmit={this.submitEvents}>
            <label> Add to your event list
              <input onChange={this.changeHandler} type='text'/>
              <button>Submit</button>
            </label>
          </form>
        </div>
      </div>      
    )
  }
}

export default Events