/* eslint-disable react/prop-types */
import React from 'react'
export const ItemsProvider = React.createContext()

export class ProductDetailProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      favoriteItem: [],
      favoriteItemfn: this.favorite,
      addToCartfn: this.addToCart,
      addToCartItem: [],
      cartItemDeletefn: this.cartItemDelete,
      cartTotolPrice: '',
      quantityIncrementfn: this.quantityIncrement,
      quantityDecrementfn: this.quantityDecrement,
      totalPrice: this.getTotalPrice,
      totalQuantity: this.getTotalQuantity,
      deliveryMethodfn: this.getDeliveryMethod,
      deliveryMethodId: '',
      deliveryfn: this.addToDeliveryInfo,
      deliveryInfo: {
        firstName: '',
        lastName: '',
        Address: '',
        City: '',
        zipCode: '',
        phoneNumber: '',
        country: '',
        Email: ''
      }
    }
  }
  fetchUrl = () => {
    fetch('https://hpwd-ecom-api.herokuapp.com/api/v1/items')
      .then(response => response.json())
      .then(data => this.setState({ items: data }))
  }
  favorite = id => {
    const favoriteItem = this.state.items.find(item => item.tcin === id)
    const newFavorite = this.state.favoriteItem
    if (newFavorite.includes(favoriteItem)) {
      const indexItem = newFavorite.indexOf(favoriteItem)
      newFavorite.splice(indexItem, 1)
      this.setState({ favoriteItem: newFavorite })
    } else if (!newFavorite.includes(favoriteItem)) {
      newFavorite.push(favoriteItem)
      this.setState({ favoriteItem: newFavorite })
    }
  }
  addToCart = value => {
    const items = this.state.addToCartItem
    const itemID = items.map(item => item.productId)
    if (itemID.includes(value.productId)) {
      const newItems = items.map(obj => {
        return obj.productId === value.productId
          ? (obj = {
              image: value.image,
              title: obj.title,
              color: value.color,
              quantity: value.quantity,
              productId: value.productId,
              productSize: obj.productSize,
              price: obj.price
            })
          : obj
      })
      this.setState({ addToCartItem: newItems })
    } else {
      items.push(value)
      this.setState({ addToCartItem: items })
    }
  }
  addToDeliveryInfo = e => {
    const { deliveryInfo } = this.state
    const currentState = deliveryInfo
    const { name, value } = e.target
    currentState[name] = value
    this.setState({ deliveryInfo: currentState })
  }
  getDeliveryMethod = id => {
    this.setState({ deliveryMethodId: id })
  }
  cartItemDelete = index => {
    const newCart = this.state.addToCartItem
    newCart.splice(index, 1)
    this.setState({ addToCartItem: newCart })
  }
  quantityIncrement = id => {
    const newAddtoCart = this.state.addToCartItem.map(obj => {
      return obj.productId === id
        ? (obj = {
            image: obj.image,
            title: obj.title,
            color: obj.color,
            quantity: obj.quantity + 1,
            productId: id,
            productSize: obj.productSize,
            price: obj.price
          })
        : obj
    })
    this.setState({ addToCartItem: newAddtoCart })
  }
  quantityDecrement = id => {
    const newAddtoCart = this.state.addToCartItem.map(obj => {
      return obj.productId === id
        ? (obj = {
            image: obj.image,
            title: obj.title,
            color: obj.color,
            quantity: obj.quantity - 1,
            productId: id,
            productSize: obj.productSize,
            price: obj.price
          })
        : obj
    })
    this.setState({ addToCartItem: newAddtoCart })
  }
  getTotalPrice = () => {
    const totalPrice = this.state.addToCartItem.reduce(
      (prevalue, currntValue) =>
        prevalue + currntValue.price * currntValue.quantity,
      0
    )
    return totalPrice
  }
  getTotalQuantity = () => {
    const totalQuantity = this.state.addToCartItem.reduce(
      (prevalue, currntValue) => prevalue + currntValue.quantity,
      0
    )
    return totalQuantity
  }
  componentDidMount() {
    this.fetchUrl()
  }
  render() {
    return (
      <ItemsProvider.Provider value={this.state}>
        {this.props.children}
      </ItemsProvider.Provider>
    )
  }
}
