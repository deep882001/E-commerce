/* eslint-disable react/prop-types */
import React from 'react'
import Favorite from '../../image/Logo/Favoritebutton.svg'
import './favorite-button.scss'
import { ItemsProvider } from '../../store/ProductDetailProvider'
class Favoritebutton extends React.Component {
  getid = (id, value) => {
    value.favoriteItemfn(id)
  }
  render() {
    return (
      <div>
        <ItemsProvider>
          {value => {
            return (
              <span className="favoriteButtonMain">
                <button
                  type="button"
                  key={this.props.productid}
                  style={{
                    backgroundColor: value.favoriteItem.find(
                      item => item.tcin === this.props.productid
                    )
                      ? '#fbb03b'
                      : 'white'
                  }}
                  onClick={() => this.getid(this.props.productid, value)}
                  className="favoriteButton"
                >
                  <Favorite
                    style={{
                      fill: value.favoriteItem.includes(this.props.productid)
                        ? 'white'
                        : 'black'
                    }}
                    className="favoriteIcon"
                  />
                </button>
              </span>
            )
          }}
        </ItemsProvider>
      </div>
    )
  }
}

export default Favoritebutton
