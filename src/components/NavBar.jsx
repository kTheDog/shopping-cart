import { Link, useParams } from "react-router-dom"
import styles from './css/Navbar.module.css'
import homeIcon from '../assets/home.svg'
import cartIcon from '../assets/cart.svg'
import shopIcon from '../assets/shop.svg'
import cartTest from '../assets/cartTest.svg'
export default function NavBar () {

  const {pageName} = useParams()
  console.log(pageName)
  let {navButton, selected, navBar, test} = styles

  let classes = {home: navButton, shop: navButton, cart: navButton}

  if (pageName) {classes[pageName] = selected} else {classes.home = selected}


  return (
    <div id="nav-bar" className={navBar}>
      <ul>
        <li className={classes.home}>
          <Link to='/'>
            <img src={homeIcon}></img>
            <span>Home</span>
          </Link>
        </li>
        <li className={classes.shop}>
          <Link to='/shop'>
            <img src={shopIcon}/>
            <span>Shop</span>
          </Link>
        </li>
        <li className={classes.cart}>
          <Link to='/cart'>
            <img className={test}src={cartIcon}></img>
            <span>Cart</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
