import InPost from '../../image/deliveryMethod/InPost.png'
import DPD from '../../image/deliveryMethod/DPD.png'
import DHL from '../../image/deliveryMethod/DHL.png'
import Paypal from '../../image/paymentMethod/Paypal.png'
import Mastercard from '../../image/paymentMethod/Mastercard.png'
import Maestro from '../../image/paymentMethod/Maestro.png'
import Visa from '../../image/paymentMethod/Visa.png'
import Discover from '../../image/paymentMethod/Discover.png'
import Ideal from '../../image/paymentMethod/Ideal.png'

export const DeliveryMethodInfo = [
  {
    id: 1,
    src: InPost,
    price: '15.00',
    detail: 'payment in advance'
  },
  {
    id: 2,
    src: InPost,
    price: '20.00',
    detail: 'Cash on delivery'
  },
  {
    id: 3,
    src: DPD,
    price: '12.00',
    detail: 'Cash on delivery'
  },
  {
    id: 4,
    src: DPD,
    price: '15.00',
    detail: 'Personal collection'
  },
  {
    id: 5,
    src: DHL,
    price: '15.00',
    detail: 'Personal collection'
  },
  {
    id: 6,
    src: DHL,
    price: '15.00',
    detail: 'Personal collection'
  }
]

export const PaymentMethod = [
  { key: 'PAYPAL', src: Paypal },
  { key: 'VISA', src: Visa },

  {
    key: 'MASTERCARD',
    src: Mastercard
  },
  {
    key: 'MAESTRO',
    src: Maestro
  },
  {
    key: 'DISCOVER',
    src: Discover
  },
  { key: 'IDEAL', src: Ideal }
]
