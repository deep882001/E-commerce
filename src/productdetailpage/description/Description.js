import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './description.scss'

export default class Description extends Component {
  render() {
    const productDetail = this.props.descritionDetail
    return (
      <div className="productDetaildescription">
        <div className="productDetaildescriptionTitle">Description</div>
        <div className="description">
          {productDetail.description && (
            <span
              className="productDetaildescriptionDetail"
              dangerouslySetInnerHTML={{
                __html: productDetail.description
              }}
            ></span>
          )}
          <div className="productDetaildescriptionBold">
            {productDetail.bullet_description &&
              productDetail.bullet_description.map(description => {
                return (
                  <p
                    key={Math.random()}
                    dangerouslySetInnerHTML={{
                      __html: description
                    }}
                  ></p>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}
Description.propTypes = {
  descritionDetail: PropTypes.object
}
