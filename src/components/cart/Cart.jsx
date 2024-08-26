import CartItem from "./CartItem";
import propTypes from 'prop-types'

export default function Cart({fetchState, cartState}) {
  const {cart, setCart} = cartState

  const {loading, error, data} = fetchState
  if (error) return <div>Network Error... Please refresh</div>
  if (loading) return <div>Loading...</div>;

  function CartList () {
    let list = []
    for (let itemID in cart) {
      console.log(itemID)
      let element = <CartItem key={itemID}data={data[itemID-1]} cartState={cartState}></CartItem>
      list.push(element)
    }
    return list
  }


  return (
    <div id="cart">
      Cart
      {CartList()}
    </div>
  )
}

Cart.propTypes = {
  fetchState : propTypes.object,
  cartState : propTypes.object
}
