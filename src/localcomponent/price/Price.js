import React from 'react'
import PropTypes from 'prop-types'

const Price = props => {
  return (
    <div>
      {props.price.formatted_current_price_type === 'sale' ? (
        <span>
          <span style={{ color: 'red' }}>
            {props.price.formatted_current_price}
          </span>
          <span style={{ opacity: 0.5, marginLeft: '20px' }}>
            {props.price.formatted_comparison_price}
          </span>
        </span>
      ) : (
        <span>{props.price.formatted_current_price}</span>
      )}
    </div>
  )
}
Price.propTypes = {
  props: PropTypes.object,
  price: PropTypes.object
}

export default Price
