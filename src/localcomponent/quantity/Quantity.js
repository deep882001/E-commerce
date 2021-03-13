import React, { Component } from 'react'
import './quantity.scss'
import PropTypes from 'prop-types'

class Quantity extends Component {
  render() {
    return (
      <div className="productQuantityNumber">
        {this.props.Quantity > 1 ? (
          <button onClick={this.props.decrement}>-</button>
        ) : (
          <button style={{ color: 'rgba(0,0,0,.3)' }}>-</button>
        )}
        <span className="quantityCount">
          <input type="text" value={this.props.Quantity} />
        </span>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}
Quantity.propTypes = {
  Quantity: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
}
export default Quantity
