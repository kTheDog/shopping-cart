import styles from '../css/ItemList.module.css'
import propTypes from 'prop-types'

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

  function increaseAmount() {
    let newProperty = {[data.id]: (amountInCart || 0) + 1}

    setCart(oldCart => Object.assign({}, oldCart, newProperty))
  }
  function decreaseAmount() {
    if(amountInCart <= 0) {throw new Error('Not supposed to happen')}

    let newProperty = {[data.id]: amountInCart - 1}

    setCart(oldCart => Object.assign({}, oldCart, newProperty))
  }

  let buyButton = <button className={buyItem} onClick={handleBuy}>Add to cart</button>

  let incrementField = () => {
    return (
      <div className={incrementWrapper}>
        <button className={decrease} onClick={decreaseAmount}>-</button>
        {amountInCart}
        <button className={increase} onClick={increaseAmount}>+</button>
      </div>
    )
  }

  return inCart() ? incrementField() : buyButton

}


BuyItem.propTypes = {
  data: propTypes.object,
  cartState: propTypes.object,
}
