import { Link } from "react-router-dom";
import propTypes from 'prop-types'
import styles from '../css/Cart.module.css'
import IncrementBuy from "../shop/IncrementBuy";
export default function CartItem (props) {

  const {data} = props
  console.log(props)
  const {cart, setCart} = props.cartState

  return (
    <div className={styles.cartItem} style={{animationDelay: `${(props.delay/6)}s`}}>
        <Link  to={`/shop/${data.id}`}className={styles.imgWrapper}>
          <img src={data.images[0]}/>
        </Link>
        <div className={styles.itemInfo}>
          {/* {data.category.name} */}
          {data.title}
        </div>
        <div className={styles.price}>
          <span className={styles.unit}>$</span>
          {data.price}
        </div>
        <IncrementBuy id={data.id} cartState={props.cartState} theme={styles}></IncrementBuy>
    </div>
  )

}

CartItem.propTypes = {
  data: propTypes.object,
  cartState: propTypes.object
}
