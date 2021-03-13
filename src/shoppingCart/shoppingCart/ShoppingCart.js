import React, { Component } from 'react'
import Quantity from '../../localcomponent/quantity/Quantity'
import { ItemsProvider } from '../../store/ProductDetailProvider'
import './shopping-cart.scss'
import FavoriteItems from '../../favorite/favoriteItems/FavoriteItems'
// import './newShoppingCart.scss'
import { Link } from 'react-router-dom'
class ShoppingCart extends Component {
  handelDelete = (index, value) => {
    value.cartItemDeletefn(index)
  }
  render() {
    return (
      <div className="ShoppingCart">
        <ItemsProvider.Consumer>
          {value => {
            return (
              <div>
                {value.addToCartItem.length < 1 ? (
                  <div className="emptyCart">
                    <div>Shopping Cart</div>
                    <div>Your cart is empty</div>
                    <Link to="/">
                      <button>Go to homepage</button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <span style={{ fontSize: '20px' }}>Shopping Cart</span>
                    {value.addToCartItem.map((cartItem, index) => {
                      return (
                        <>
                          <ul key={cartItem.productId} className="cartItem">
                            <li className="cartImg">
                              <img
                                width="62px"
                                height="35px"
                                className="cartImage"
                                alt={cartItem.title}
                                src={cartItem.image}
                              />
                            </li>
                            <li style={{ display: 'block' }}>
                              <div className="cartItemItitle">
                                <input type="" value={cartItem.title} />
                              </div>
                              <div className="cartItemId">
                                #{cartItem.productId}
                              </div>
                              {cartItem.color !== '' ? (
                                <div style={{ fontSize: '15px' }}>
                                  <span className="colorSizeTitle">Color:</span>
                                  {cartItem.color}
                                </div>
                              ) : null}
                              {cartItem.productSize !== '' ? (
                                <div style={{ fontSize: '15px' }}>
                                  <span className="colorSizeTitle">Size:</span>
                                  {cartItem.productSize}
                                </div>
                              ) : null}
                            </li>
                            <li className="cartQuantity">
                              <span className="cartQuantity">
                                <Quantity
                                  Quantity={cartItem.quantity}
                                  increment={() =>
                                    value.quantityIncrementfn(
                                      cartItem.productId
                                    )
                                  }
                                  decrement={() =>
                                    value.quantityDecrementfn(
                                      cartItem.productId
                                    )
                                  }
                                />
                              </span>
                            </li>
                            <li className="cartItemPrice">
                              $
                              <input
                                type="text"
                                value={(
                                  cartItem.price * cartItem.quantity
                                ).toFixed(2)}
                              />
                            </li>
                            <li className="cartDel">
                              <button
                                className="cartDeletebutton"
                                onClick={() => this.handelDelete(index, value)}
                              >
                                X
                              </button>
                            </li>
                          </ul>
                        </>
                      )
                    })}
                    <ul className="cartTotalCheckout">
                      <Link to="/">
                        <li className="continueShopping">
                          <span style={{ fontSize: '20px' }}>&#171;</span>
                          Continue Shopping
                        </li>
                      </Link>
                      <li className="totalCost">
                        <span
                          className="totalCostText"
                          style={{ opacity: 0.7 }}
                        >
                          {' '}
                          Total cost:
                        </span>

                        <input
                          type="text"
                          value={`$${value.totalPrice().toFixed(2)}`}
                        />
                      </li>
                      <li style={{ textAlign: 'end' }}>
                        <Link to="/deliveryInfo">
                          <button className="checkoutButton">NEXT STEP</button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
                <div>
                  <FavoriteItems />
                </div>
              </div>
            )
          }}
        </ItemsProvider.Consumer>
      </div>
    )
  }
}

export default ShoppingCart
