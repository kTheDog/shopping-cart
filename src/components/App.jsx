import { Link, useParams } from "react-router-dom"
import ShopMain from "./shop/ShopMain"
import { useState } from "react"
import Cart from "./cart/Cart"
import useGetData from "../useGetData"
import NavBar from "./NavBar"
import Welcome from "./Welcome"
import styles from "./css/App.module.css"

export default function App() {

  const {pageName} = useParams()
  const {data, loading, error} = useGetData()
  const [cart, setCart] = useState({})
  // cart : {itemID: amount}
  function bodyComponent() {
    switch (pageName) {
      case undefined:
        return <Welcome></Welcome>
      case 'shop':
        return <ShopMain fetchState = {{data, loading, error}} cartState={{cart, setCart}}></ShopMain>
      case 'cart':
        return <Cart fetchState= {{data, loading, error}} cartState={{cart, setCart}}></Cart>
    }
  }

  return (

    <div className={styles.app}>
      <NavBar></NavBar>
      {bodyComponent()}
    </div>

  )
}
