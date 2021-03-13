import React, { Component } from 'react'
import { ItemsProvider } from '../../store/ProductDetailProvider'
import Swiper from 'react-id-swiper'
import { Link } from 'react-router-dom'
import Price from '../../localcomponent/price/Price'

class FavoriteItems extends Component {
  state = {}
  render() {
    const params = {
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
    }
    return (
      <div style={{ marginTop: '50px' }}>
        <ItemsProvider.Consumer>
          {value => {
            return (
              <div>
                {value.favoriteItem.length > 0 && (
                  <div>
                    <span style={{ fontSize: '20px' }}>Favorite Item</span>
                    <Swiper {...params}>
                      {value.favoriteItem.map(item => {
                        return (
                          <div key={item.tcin}>
                            <Link to={`/${item.tcin}`}>
                              <img
                                style={{ width: '272px' }}
                                alt=""
                                src={item.image}
                              />
                            </Link>
                            <div className="suggestedTitle">{item.title}</div>
                            <Price price={item.price} />
                          </div>
                        )
                      })}
                    </Swiper>
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

export default FavoriteItems
