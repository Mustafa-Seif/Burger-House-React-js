import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='NotFound'>
        <h1>404 page</h1>
        <Link to="/" className='Link' >Go To Home Page</Link>
    </div>
  )
}

export default NotFound