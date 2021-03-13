import React from 'react'
import { hot } from 'react-hot-loader'
import MainHeader from '../src/Header/Header'
import Categories from '../src/categories/Categories'
import Footer from '../src/footer/Footer'
import ShoppingCart from '../src/shoppingCart/shoppingCart/ShoppingCart'
import ProductDetail from '../src/productdetailpage/productDetail/ProductDetail'
import Delivery from '../src/shoppingCart/delivery/Delivery'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProductDetailProvider } from '../src/store/ProductDetailProvider'
import Summary from './shoppingCart/summary/Summary'
import CompleteOrder from './shoppingCart/completeOrder/CompleteOrder'
import HomePage from './HomePage/HomePage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ProductDetailProvider>
            <MainHeader />
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/ProductList" component={Categories}></Route>
              <Route path="/shoppingcart" component={ShoppingCart}></Route>
              <Route path="/deliveryinfo" component={Delivery}></Route>
              <Route path="/cartsummry" component={Summary}></Route>
              <Route path="/orderComplete" component={CompleteOrder}></Route>
              <Route path="/:productId" component={ProductDetail}></Route>
            </Switch>
            <Footer />
          </ProductDetailProvider>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)
