import React from 'react'
import './deliveryMethod.scss'
import PropTypes from 'prop-types'

const DeliveryMethod = props => {
  DeliveryMethod.propTypes = {
    deliveryMethodId: PropTypes.number,
    id: PropTypes.number,
    handelDelivryInfo: PropTypes.func,
    price: PropTypes.number,
    image: PropTypes.string,
    detail: PropTypes.string
  }
  return (
    <div className="deliveryMethod">
      <button
        style={{
          border:
            props.id === props.deliveryMethodId
              ? '1px solid #fbb03b'
              : '1px solid black',
          opacity: props.id === props.deliveryMethodId ? '1' : '0.5'
        }}
        onClick={props.handelDelivryInfo}
      >
        <p>
          <img width="62px" height="35px" alt="" src={props.image} />
        </p>
        <p>${props.price}</p>
        <p className="detail">{props.detail}</p>
      </button>
    </div>
  )
}

export default DeliveryMethod
