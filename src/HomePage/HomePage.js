import React from 'react'
import './home-page.scss'
import { ItemsProvider } from '../store/ProductDetailProvider'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper'
import Price from '../localcomponent/price/Price'
import FreeShippingIcon from '../image/HomepageLogo/freeShipping.svg'
import PaymentIcon from '../image/HomepageLogo/Payments.svg'
import MoneyBackGuaranteeIcon from '../image/HomepageLogo/Money.svg'
import FinestQualityIcon from '../image/HomepageLogo/FinestQuality.svg'
import HeroImage from '../image/Logo/heroImage.png'
import Subscribe from '../image/HomepageLogo/subscribe.png'

class HomePage extends React.Component {
  render() {
    const params = {
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: true,
      lazy: true,
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
      <div>
        <ItemsProvider.Consumer>
          {value => {
            return (
              <div>
                <div
                  style={{
                    backgroundImage: `url(${HeroImage})`
                  }}
                  className="homepage"
                >
                  <div className="homePageMain">
                    <div className="saleText">
                      Sale of the summer collection
                    </div>
                    <Link to="/ProductList">
                      <div className="shopNowButton">
                        <span className="shopNowArrow">&#129058;</span> shop now
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    maxWidth: '90%',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '20px', margin: '50px 0px' }}>
                      Selected just for you
                    </div>
                    {/* <Swiper {...params} shouldSwiperUpdate>
                      {value.items
                        .filter(items => items.promotion_call_out_message)
                        .map(item => (
                          <div
                            className="suggestedItem swiper-slide"
                            key={item.tcin}
                          >
                            <div className="suggestedImage">
                              <Link to={`/${item.tcin}`}>
                                <img alt="" src={item.image} />
                              </Link>
                            </div>
                            <div className="suggestedTitle">{item.title}</div>
                            <Price price={item.price} />
                          </div>
                        ))}
                    </Swiper> */}
                  </div>
                  <div className="chooseUs">
                    <div className="chooseUstitle">
                      Why should you choose us?
                    </div>
                    <div className="chooseUsGrid">
                      <div>
                        <FreeShippingIcon />
                        <div className="chooseUsTitle">Free Shipping</div>
                        <div className="chooseUsDetail">
                          All purchases over $199 are eligible for free shipping
                          via USPS First Class Mail
                        </div>
                      </div>
                      <div>
                        <PaymentIcon />
                        <div className="chooseUsTitle">Easy Payments</div>
                        <div className="chooseUsDetail">
                          All payments are processed instantly over a secure
                          payment protocol.
                        </div>
                      </div>
                      <div>
                        <MoneyBackGuaranteeIcon />
                        <div className="chooseUsTitle">
                          Money-Back Guarantee
                        </div>
                        <div className="chooseUsDetail">
                          If an item arrived damaged or you changed your mind,
                          you can send it back for a full refund
                        </div>
                      </div>
                      <div>
                        <FinestQualityIcon />
                        <div className="chooseUsTitle">Finest Quality</div>
                        <div className="chooseUsDetail">
                          Designed to last, each of our products has been
                          crafted with the finest materials.
                        </div>{' '}
                      </div>
                    </div>
                    <div
                      style={{ backgroundImage: `url(${Subscribe})` }}
                      className="subscribe"
                    >
                      <div className="subscribeTitle">
                        Subscribe to our newsletter and receive exclusive offers
                        every week
                      </div>
                      <div
                        className="subscribeEmail"
                        style={{ textAlign: 'center' }}
                      >
                        <input type="email" placeholder="Enter your email" />
                        <button>SUBSCRIBE</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Footer /> */}
              </div>
            )
          }}
        </ItemsProvider.Consumer>
      </div>
    )
  }
}

export default HomePage
