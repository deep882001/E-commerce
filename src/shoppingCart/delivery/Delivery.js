import React from 'react'
import './delivery.scss'
import DeliveryInfoInputTextBox from '../deliveryInfoInputTextBox/DeliveryInfoInputTextBox'
import DeliveryMethod from '../deliveryMethod/DeliveryMethod'
import { ItemsProvider } from '../../store/ProductDetailProvider'
import { Link } from 'react-router-dom'
import { DeliveryMethodInfo } from '../deliveryAndPaymentMethodInfo/DeliveryAndPaymentMethodInfo'

export default class Delivery extends React.Component {
  getDataFromInput = (value, e) => {
    value.deliveryfn(e)
  }

  getDelivryMethod = (value, id) => {
    value.deliveryMethodfn(id)
  }
  render() {
    return (
      <ItemsProvider.Consumer>
        {value => {
          return (
            <div className="addressDelivery">
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
                  <div style={{ margin: '30px', fontSize: '20px' }}>
                    Address data and type of delivery
                  </div>
                  <div className="delivryForm">
                    <div className="table">
                      <table
                        style={{ width: '100%', borderSpacing: '2em 0.5em' }}
                      >
                        <tr>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="First name:"
                              type="text"
                              name="firstName"
                              placeholder="First name"
                              value={value.deliveryInfo.firstName}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="Last name:"
                              type="text"
                              name="lastName"
                              placeholder="Last name"
                              value={value.deliveryInfo.lastName}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="Address:"
                              type="text"
                              name="Address"
                              placeholder="Address"
                              value={value.deliveryInfo.Address}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="City:"
                              type="text"
                              name="City"
                              placeholder="City"
                              value={value.deliveryInfo.City}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="Postal Code/Zip:"
                              type="text"
                              name="zipCode"
                              placeholder="Postal Code/Zip"
                              value={value.deliveryInfo.zipCode}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="Phone number:"
                              type="telNo"
                              name="phoneNumber"
                              placeholder="Phone number"
                              value={value.deliveryInfo.phoneNumber}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="Country:"
                              type="text"
                              name="country"
                              placeholder="Country"
                              value={value.deliveryInfo.country}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                          <td>
                            <DeliveryInfoInputTextBox
                              title="E-mail:"
                              type="email"
                              name="Email"
                              placeholder="E-mail"
                              value={value.deliveryInfo.Email}
                              handelValue={e => {
                                this.getDataFromInput(value, e)
                              }}
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="paymentMethod">
                      <ul style={{ marginTop: '23px' }}>
                        {DeliveryMethodInfo.map(method => {
                          return (
                            <li key={method.id}>
                              <DeliveryMethod
                                image={method.src}
                                price={method.price}
                                detail={method.detail}
                                handelDelivryInfo={() =>
                                  this.getDelivryMethod(value, method.id)
                                }
                                deliveryMethodId={value.deliveryMethodId}
                                id={method.id}
                              />
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="backNextStepButton">
                    <Link to="/shoppingcart">
                      <button className="backButton">
                        <span style={{ fontSize: '25px' }}>&#171;</span>Back
                      </button>
                    </Link>
                    <div style={{ justifySelf: 'end' }}>
                      {value.deliveryInfo.firstName &&
                      value.deliveryInfo.lastName &&
                      value.deliveryInfo.Address &&
                      value.deliveryInfo.City &&
                      value.deliveryInfo.zipCode &&
                      value.deliveryInfo.phoneNumber &&
                      value.deliveryInfo.country &&
                      value.deliveryMethodId ? (
                        <Link to="/cartsummry">
                          <button className="nextStepButton">NEXT STEP</button>
                        </Link>
                      ) : (
                        <button
                          className="nextStepButton"
                          style={{ opacity: 0.5 }}
                        >
                          NEXT STEP
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </ItemsProvider.Consumer>
    )
  }
}
