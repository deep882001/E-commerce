import React from 'react'
import CompleteOrderLogo from '../../image/Logo/completeOrder.svg'
import './completeOrder.scss'
import { Link } from 'react-router-dom'
import { ItemsProvider } from '../../store/ProductDetailProvider'

export default class CompleteOrder extends React.Component {
  refreshPage = () => {
    const { history } = this.props
    history.push('/')
    window.location.reload(false)
  }
  render() {
    return (
      <div className="complete-order">
        <ItemsProvider.Consumer>
          {value => {
            return value.addToCartItem.length < 1 ? (
              <div className="emptyCart">
                <div>Shopping Cart</div>
                <div>Your cart is empty</div>
                <Link to="/">
                  <button>Go to homepage</button>
                </Link>
              </div>
            ) : (
              <div>
                <div>
                  <CompleteOrderLogo className="order-complete-logo" />
                </div>
                <div>Order Completed Successfully!</div>
                <div>
                  Thank you for ordering. we received your order{' '}
                  <span style={{ color: '#fbb03b' }}>
                    {`Eshop-111-${Math.floor(Math.random() * 5000)}`}
                  </span>{' '}
                  and will begin processing it soon.
                </div>
                <button className="gotoHomePage" onClick={this.refreshPage}>
                  Go to homepage
                </button>
              </div>
            )
          }}
        </ItemsProvider.Consumer>
      </div>
    )
  }
}
