import React from 'react'
import './delivryInfoInputTextBox.scss'
import PropTypes from 'prop-types'

const DeliveryInfoInputTextBox = props => {
  DeliveryInfoInputTextBox.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    handelValue: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
  }

  return (
    <div className="del">
      <label className="inputBox">
        {props.title}
        <div className="textBox">
          <input
            defaultValue={props.value}
            onChange={props.handelValue}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
          />
        </div>
      </label>
    </div>
  )
}

export default DeliveryInfoInputTextBox
