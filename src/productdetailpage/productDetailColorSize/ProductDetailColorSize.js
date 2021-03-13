import React, { Component } from 'react'
import './productDetailColorSize.scss'
import PropTypes from 'prop-types'

export default class ProductDetailColorSize extends Component {
  render() {
    const productDetail = this.props.productDetail
    return (
      <span className="productDetailColorSize">
        <div>
          {productDetail.swatches && (
            <div className="ProductDetailColorOptions">
              <div className="productDetailColorTitle">Color :</div>
              {productDetail.swatches.color.map(element => {
                return (
                  <ul key={element.partNumber}>
                    <li>
                      <div className="productDetailButtonColorName">
                        <button
                          style={{
                            border:
                              element.color === this.props.addToCartColor
                                ? '2px solid #fbb03b'
                                : '1px solid black'
                          }}
                          className="productColorButton"
                          onClick={() =>
                            this.props.getProductColor(element.color)
                          }
                        >
                          <img
                            className="colorImage"
                            alt={element.color}
                            src={element.swatch_url}
                          />
                        </button>
                        <div className="productColorName">{element.color}</div>
                      </div>
                    </li>
                  </ul>
                )
              })}
            </div>
          )}
        </div>
        <div className="productDetailSize">
          <div>Size :</div>
          <ul>
            {productDetail.variation_attributes &&
              productDetail.variation_attributes.size.map(size => (
                <li className="sizeNumber" key={size}>
                  <button
                    style={{
                      backgroundColor:
                        size === this.props.productSize ? '#fbb03b' : 'white'
                    }}
                    onClick={() => this.props.getSize(size)}
                  >
                    {size}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </span>
    )
  }
}
ProductDetailColorSize.propTypes = {
  productDetail: PropTypes.object,
  addToCartColor: PropTypes.string,
  getProductColor: PropTypes.func,
  productSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getSize: PropTypes.func
}
