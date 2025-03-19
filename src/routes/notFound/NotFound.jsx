import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div id='not-found'>
      <div id='not-found-txt'>
        4O4
      </div>
      <h1>There's NOTHING here...</h1>
      <div id='got-to-home'>
        <Link to="/" >Go back to HOME</Link>
      </div>
    </div>
  )
}

export default NotFound
