import CartItem from "./CartItem";
import propTypes from 'prop-types'
import styles from '../css/Cart.module.css'
import Total from "./Total";
export default function Cart({fetchState, cartState}) {
  const {cart, setCart} = cartState

  const {loading, error, data} = fetchState
  if (error) return <div>Network Error... Please refresh</div>
  if (loading) return <div>Loading...</div>;

  function CartList () {
    let list = []
    let i = 0
    for (let itemID in cart) {
      console.log(cartState)
      if (cart[itemID] == 0) {continue}

      console.log(itemID)
      let element = <CartItem delay={i} key={itemID}data={data[itemID]} cartState={cartState}></CartItem>
      list.push(element)
      i++;
    }
    return list
  }


  return (
    <div className={styles.cartWrapper}>
      <div class={styles.itemList}>
        {CartList()}
      </div>
      <Total data={data} cart={cart}></Total>
    </div>
  )
}

Cart.propTypes = {
  fetchState : propTypes.object,
  cartState : propTypes.object
}
