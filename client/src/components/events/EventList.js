import React from 'react'
import { Link } from 'react-router-dom'

export default function EventList (props) {
  return (
    <div>
      {props.events.map(event => {
        return (
          <div key={event._id}>
            <h3>
              <Link to={`/events/${event._id}`}>{event.title}</Link>
            </h3>
          </div>
        )
      })}
    </div>
  )
}