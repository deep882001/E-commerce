import React from 'react'
import Logo from '../Header/mainLogo/Logo'
import './footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <div className="eshopFooter">
        <div className="footer">
          <div className="footer-logoside">
            <div className="footer-Logo">
              <Logo />
            </div>
            <div className="footer-Text">
              House My Brand designs clothing for the young, the old and
              everyone in between – but most importantly, for the fashionable
            </div>
          </div>
          <div className="footer-infoside">
            <ul>
              <h4>Shopping online</h4>
              <li>Order status </li>
              <li>Shipping and dellivery</li>
              <li>Return</li>
              <li>Payment options</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <h4>Information</h4>
              <li>Gift cards </li>
              <li>Find a store</li>
              <li>Newsletter</li>
              <li>Become a member</li>
              <li>Site feedback</li>
            </ul>
            <ul>
              <h4>Contact</h4>
              <li>store@uikit.com</li>
              <li>Hotline: +1 131 138 138</li>
            </ul>
          </div>
        </div>
        <div className="copyRight">© 2020 ALL RIGHTS RESERVED</div>
      </div>
    )
  }
}

export default Footer
