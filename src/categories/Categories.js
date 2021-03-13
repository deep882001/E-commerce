import React, { Component } from 'react'
import './categories.scss'
import Favoritebutton from '../favorite/favoriteButton/Favoritebutton'
import Price from '../localcomponent/price/Price'
export const MyContext = React.createContext()
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import SkeletonLodingpage from '../localcomponent/LoddingPageSkeleton/SkeletonLodingpage'

class Categories extends Component {
  state = {
    productDetails: [],
    isLodding: true,
    pagenumber: ['1'],
    perPage: 20
  }
  getPaginationData = id => {
    fetch(
      `https://hpwd-ecom-api.herokuapp.com/api/v1/items/page/${id}/limit/${this.state.perPage}`
    )
      .then(responce => responce.json())
      .then(data =>
        this.setState({
          productDetails: data,
          isLodding: false
        })
      )
  }

  fetchUrl = () => {
    fetch('https://hpwd-ecom-api.herokuapp.com/api/v1/items')
      .then(responce => responce.json())
      .then(data => {
        this.setState({
          pagenumber: Math.ceil(data.length / this.state.perPage)
        })
      })
  }
  componentDidMount() {
    this.getPaginationData()
    this.fetchUrl()
  }

  render() {
    let number = []
    for (let i = 1; i <= this.state.pagenumber; i++) {
      number.push(i)
    }

    return (
      <>
        <div className="productList">
          {this.state.isLodding ? (
            <div>
              <SkeletonLodingpage />
            </div>
          ) : (
            this.state.productDetails.map(productDetail => {
              return (
                <LazyLoad key={productDetail.tcin}>
                  <ul>
                    <li>
                      {' '}
                      <div className="catagories_image">
                        <Link to={`/${productDetail.tcin}`}>
                          <img
                            className="catagories_gridimage"
                            src={productDetail.image}
                            alt="items"
                          />
                        </Link>
                        <div className="catagories_favoritebutton">
                          <Favoritebutton productid={productDetail.tcin} />
                        </div>
                        <p>{productDetail.title}</p>
                        <p>
                          <Price price={productDetail.price} />
                        </p>
                      </div>
                    </li>
                  </ul>
                </LazyLoad>
              )
            })
          )}
        </div>
        <div className="categoriesPagination">
          <button className="paginationButtonLeft">&laquo;</button>
          {number.map(number => (
            <button key={number} onClick={() => this.getPaginationData(number)}>
              {number}
            </button>
          ))}
          <button className="paginationButtonRight">&raquo;</button>
        </div>
      </>
    )
  }
}

export default Categories
