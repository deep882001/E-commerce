import React from 'react'
import './header.scss'
import '../styles.css'
import Menu from './menu/Menu'
import Logo from './mainLogo/Logo'
import Search from '../image/Logo/Search.svg'
import Cart from '../image/Logo/Cart.svg'
import Menuicon from '../image/Logo/Menu.svg'
import Profile from '../image/Logo/Profile.svg'
import { Link } from 'react-router-dom'
import { ItemsProvider } from '../store/ProductDetailProvider'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ItemsProvider.Consumer>
          {value => {
            return (
              <div className="heading">
                <div className="heading_logo">
                  <Logo />
                </div>
                <div className="headerMenu">
                  <Menu />
                </div>
                <div className="nav_item">
                  <span className="search">
                    <Search className="icon-hover" />
                  </span>

                  <span className="cart">
                    <Link to={'/shoppingcart'}>
                      <Cart className="icon-hover cartIcon" />
                      <p className="totalQuantity">{value.totalQuantity()}</p>
                    </Link>
                  </span>

                  <span className="menuicon">
                    <Link to="/ProductList">
                      <Menuicon className="icon-hover" />
                    </Link>
                  </span>
                  <span className="profile">
                    <Profile className="icon-hover" />
                  </span>
                </div>
              </div>
            )
          }}
        </ItemsProvider.Consumer>
      </div>
    )
  }
}

export default Header
