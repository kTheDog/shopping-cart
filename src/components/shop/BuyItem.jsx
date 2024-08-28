import styles from '../css/ItemList.module.css'
import propTypes from 'prop-types'
import IncrementBuy from './IncrementBuy'
import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'
export default function BuyItem (props) {

  const {buyItem, incrementWrapper, increase, decrease} = styles
  const {data} = props
  const {cart, setCart} = props.cartState
  const amountInCart = cart[data.id]
  function inCart () {
    return amountInCart > 0
  }
  function handleBuy() {

    let newProperty = {[data.id]: (amountInCart || 0) + 1}

    setCart(oldCart => Object.assign({}, oldCart, newProperty))
  }

  let buyButton = <button className={buyItem} onClick={handleBuy}>{props.buyText || 'Add'}</button>

  let increment = <IncrementBuy theme={styles} id = {data.id} cartState={props.cartState}></IncrementBuy>
  return inCart() ? increment : buyButton

}


BuyItem.propTypes = {
  data: propTypes.object,
  cartState: propTypes.object,
}
