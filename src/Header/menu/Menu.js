import React, { Component } from 'react'
import './menu.scss'
import { Link } from 'react-router-dom'
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <Link to="/ProductList">
            <li>Men</li>
          </Link>
          <li>Woman</li>
          <li>Kids</li>
        </ul>
      </div>
    )
  }
}

export default Menu
