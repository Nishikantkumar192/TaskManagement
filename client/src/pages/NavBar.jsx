import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to={"/tasks"}>Tasks</Link>
    </div>
  )
}

export default NavBar
