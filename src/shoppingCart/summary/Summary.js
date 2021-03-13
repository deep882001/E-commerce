import React from 'react'
import { ItemsProvider } from '../../store/ProductDetailProvider'
import {
  DeliveryMethodInfo,
  PaymentMethod
} from '../deliveryAndPaymentMethodInfo/DeliveryAndPaymentMethodInfo'
import './summary.scss'
import { Link } from 'react-router-dom'

export default class Summary extends React.Component {
  state = {
    paymentType: ''
  }
  getPaymentType = key => {
    this.setState({ paymentType: key })
  }
  render() {
    return (
      <div>
        <ItemsProvider.Consumer>
          {value => {
            return (
              <div className="summary">
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
                    <div style={{ marginTop: '30px', fontSize: '20px' }}>
                      Summary
                    </div>
                    <div className="summaryPart1">
                      <div className="paymentMethod">
                        <div className="summaryTitle">Payment method</div>
                        <ul className="paymentMethodUl">
                          {PaymentMethod.map(payment => {
                            return (
                              <li key={payment.key}>
                                <button
                                  style={{
                                    border:
                                      payment.key === this.state.paymentType
                                        ? '2px solid #fbb03b'
                                        : '1px solid black'
                                  }}
                                  className="paymentType"
                                  onClick={() =>
                                    this.getPaymentType(payment.key)
                                  }
                                >
                                  <img
                                    className="paymentImage"
                                    alt={payment.key}
                                    src={payment.src}
                                  />
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                      <div
                        className="deliveryMethod"
                        style={{ textAlign: 'center' }}
                      >
                        <div className="summaryTitle">Delivery method</div>
                        <div className="deliveryType">
                          {DeliveryMethodInfo.filter(obj => {
                            return obj.id === value.deliveryMethodId
                          }).map(method => {
                            return (
                              <div
                                className="deliveryTypeDetail"
                                key={method.id}
                              >
                                <img alt="" src={method.src} />
                                <div>{method.price}</div>
                                <div>{method.detail}</div>
                                <Link to="/deliveryInfo">
                                  <div className="changeDeliveryType">
                                    CHANGE
                                  </div>
                                </Link>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div className="deliveryAddress">
                        <div className="summaryTitle"> Address delivery</div>
                        <span>
                          {value.deliveryInfo.firstName}
                          {'  '}
                          {value.deliveryInfo.lastName}
                        </span>
                        <div>
                          {value.deliveryInfo.Address}
                          {'  '}
                          {value.deliveryInfo.City}
                          {'  '} {value.deliveryInfo.zipCode}
                        </div>
                        <div>{value.deliveryInfo.country}</div>
                        <div>{value.deliveryInfo.phoneNumber}</div>
                        <div>{value.deliveryInfo.Email}</div>
                        <Link to="/deliveryInfo">
                          <div className="changeAddress">CHANGE ADDRESS</div>
                        </Link>
                      </div>
                    </div>
                    <div className="itemsummry">
                      <div className="iteamsDetail">
                        {value.addToCartItem.map(cartItem => {
                          return (
                            <>
                              <ul key={cartItem.productId} className="cartItem">
                                <li className="cartImg">
                                  <img
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
                                      <span className="colorSizeTitle">
                                        Color:
                                      </span>
                                      {cartItem.color}
                                    </div>
                                  ) : null}
                                  {cartItem.productSize !== '' ? (
                                    <div style={{ fontSize: '15px' }}>
                                      <span className="colorSizeTitle">
                                        Size:
                                      </span>
                                      {cartItem.productSize}
                                    </div>
                                  ) : null}
                                </li>
                                <li className="cartQuantity">
                                  <span className="cartQuantity">
                                    x{cartItem.quantity}
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
                              </ul>
                            </>
                          )
                        })}
                      </div>
                      <div className="totalPrice">
                        <span className="totalCostText">
                          Total cost:
                          <input
                            type="text"
                            value={`$${value.totalPrice().toFixed(2)}`}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="summaryButton">
                      <div>
                        <Link to="/shoppingcart">
                          <div className="backButton">
                            <span style={{ fontSize: '25px' }}>&#171;</span>Back
                          </div>
                        </Link>
                      </div>
                      {/* <div>
                        <Link to="/">
                          <button className="continueShopping">
                            CONTINUE SHOPPING
                          </button>
                        </Link>
                      </div> */}
                      <div style={{ textAlign: 'end' }}>
                        <Link to="/orderComplete">
                          <button className="placeOrder">PLACE ORDER</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          }}
        </ItemsProvider.Consumer>
      </div>
    )
  }
}
