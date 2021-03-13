import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './product-detail.scss'
import Price from '../../localcomponent/price/Price'
import ProductDetailColorSize from '../productDetailColorSize/ProductDetailColorSize'
import Favoritebutton from '../../favorite/favoriteButton/Favoritebutton'
import Description from '../description/Description'
import Quantity from '../../localcomponent/quantity/Quantity'
import Standardshipment from '../../image/Logo/Standardshipment.svg'
import Expressdelivery from '../../image/Logo/Expressdelivery.svg'
import SkeletonProductDetailpage from '../../localcomponent/productDetailSkeleton/SkeletonProductDetailpage'
import { ItemsProvider } from '../../store/ProductDetailProvider'
class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productDetail: {},
      productimage: {},
      isLodding: true,
      productCart: {},
      Quantity: 1,
      addToCartColor: '',
      productSize: ''
    }
  }

  getProductDetail = id => {
    fetch(`https://hpwd-ecom-api.herokuapp.com/api/v1/item/${id}`)
      .then(response => response.json())
      .then(data => {
        const detail = data[0]
        this.setState({ productDetail: detail, isLodding: false })
        this.setState({
          productimage: `${detail.images[0].base_url}${detail.images[0].primary}`
        })
      })
  }
  getProductColor = productColor => {
    const productFinalColor = this.state.productDetail.swatches.color.filter(
      color => color.color === productColor
    )
    this.setState({
      productimage:
        productFinalColor &&
        productFinalColor.length > 0 &&
        productFinalColor[0].img_url,
      addToCartColor: productColor
    })
  }
  quantityIncrement = () => {
    this.setState({ Quantity: this.state.Quantity + 1 })
  }
  quantityDecrement = () => {
    this.setState({ Quantity: this.state.Quantity - 1 })
  }
  getSize = size => {
    this.setState({ productSize: size })
  }

  addTocart = (
    image,
    title,
    color,
    productId,
    productSize,
    quantity,
    price,
    value
  ) => {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props
    this.setState(
      {
        productCart: {
          image,
          title,
          color,
          quantity,
          productId,
          productSize,
          price
        }
      },
      () => {
        value.addToCartfn(this.state.productCart)
        // eslint-disable-next-line react/prop-types
        history.push('/shoppingcart')
      }
    )
  }
  componentDidMount() {
    this.getProductDetail(this.props.match.params.productId)
  }

  render() {
    const productDetail = this.state.productDetail

    return (
      <>
        <div>
          <ItemsProvider.Consumer>
            {value => {
              return (
                <div className="ProductDetailMain">
                  <div className="productDeliveryInfo">
                    <div className="Standardshipment">
                      <span style={{ marginRight: '20px' }}>
                        <Standardshipment />
                      </span>
                      <span style={{ fontWeight: 'bold' }}>
                        Standard shipment{' '}
                      </span>
                      <div>Free within 3-6 business days</div>
                    </div>
                    <div
                      style={{ marginLeft: '20px' }}
                      className="Expressdelivery"
                    >
                      <span style={{ marginRight: '20px' }}>
                        <Expressdelivery />
                      </span>
                      <span style={{ fontWeight: 'bold' }}>
                        Express delivery
                      </span>
                      <div>$35.00 available</div>
                    </div>
                  </div>
                  <div>
                    {this.state.isLodding ? (
                      <SkeletonProductDetailpage />
                    ) : (
                      // {Object.values(this.state.productDetail).length > 0 && (
                      <div>
                        <div className="productDetail">
                          <div className="productDetailImage">
                            <img
                              className="productDetailMainimg"
                              alt=""
                              src={this.state.productimage}
                            />
                          </div>
                          <div className="productDetailinfo">
                            <div>
                              <p className="productDetailTitle">
                                {productDetail.title}
                              </p>
                            </div>
                            <div className="productDetailPrice">
                              <Price price={productDetail.price} />
                            </div>
                            <div>
                              <ProductDetailColorSize
                                productDetail={productDetail}
                                getSize={this.getSize}
                                getProductColor={this.getProductColor}
                                productSize={this.state.productSize}
                                addToCartColor={this.state.addToCartColor}
                              />
                            </div>
                            <div className="productDetail-Quantity">
                              <div> Quantity:</div>
                              <Quantity
                                Quantity={this.state.Quantity}
                                increment={this.quantityIncrement}
                                decrement={this.quantityDecrement}
                              />
                            </div>
                            <button
                              type="button"
                              className="AddtoCart"
                              onClick={() =>
                                this.addTocart(
                                  this.state.productimage,
                                  productDetail.title,
                                  this.state.addToCartColor,
                                  productDetail.tcin,
                                  this.state.productSize,
                                  this.state.Quantity,
                                  productDetail.price.current_retail_min,
                                  value
                                )
                              }
                            >
                              ADD TO CART
                            </button>
                            <div className="productFavorite">
                              <Favoritebutton productid={productDetail.tcin} />
                            </div>
                          </div>
                        </div>
                        <div>
                          <Description descritionDetail={productDetail} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            }}
          </ItemsProvider.Consumer>
        </div>
      </>
    )
  }
}
ProductDetail.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired
    })
  })
}
export default ProductDetail
