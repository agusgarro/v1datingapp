
import React, { Component } from 'react'
import axios from 'axios';
import EventList from './EventList';

export default class Events extends Component {

    state = {
      events: []
    }
    getData = () => {
      // get the current list of events from the server
      axios.get('/api/events')
        .then(response => {
          console.log(response);
          // put them into the state
          this.setState({
            events: response.data
          })
        })
        .catch(err => console.log(err))
    }
  
    componentDidMount() {
      this.getData();
    }
  
    render() {
      return (
        <div className='events-container'>
          <EventList events={this.state.events} />
        </div>
      )
    }
  }