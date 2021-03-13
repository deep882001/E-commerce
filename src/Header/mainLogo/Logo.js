import React from 'react'
import './logo.scss'
import MainLogo from '../../image/Logo/mainLogo.svg'
import { Link } from 'react-router-dom'
class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="logo">
          <span className="logo_e">
            <MainLogo className="icon-hover" /> E
          </span>
          -Shop
        </div>
      </Link>
    )
  }
}

export default Logo
