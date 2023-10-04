import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="intro">
    <h1 className="heading">Imaginibus</h1>
      <p className="browse">please sign in</p>
      <a href="/Home" className="btn"></a>
    </div>
  )
}

export default Landing