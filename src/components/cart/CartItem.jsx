import { Link } from "react-router-dom";
import propTypes from 'prop-types'
export default function CartItem (props) {

  const {data} = props
  console.log(props)
  const {cart, setCart} = props.cartState

  function handleBuy() {

    let newProperty = {[data.id]: (cart[data.id] || 0) + 1}

    setCart(oldCart => Object.assign({}, oldCart, newProperty))
  }

  return (
    <div id="shop-item">
        <div>{data.title}</div>
        <Link to={`${data.id}`}>Go{data.id}</Link>
        <img src={data.img}/>

        <button id="buy" onClick={handleBuy}>
          Buy
        </button>
    </div>
  )

}

CartItem.propTypes = {
  data: propTypes.object,
  cartState: propTypes.object
}
