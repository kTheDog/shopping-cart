import { Link, useParams } from "react-router-dom"
import ShopMain from "./shop/ShopMain"
import { useState } from "react"
import Cart from "./cart/Cart"
import useGetData from "../useGetData"
import NavBar from "./NavBar"
import Welcome from "./welcome/Welcome"
import styles from "./css/App.module.css"
import useGetWelcomeImages from "./welcome/useGetWelcomeImages"


export default function App() {

  const {pageName} = useParams()
  const getShopData= useGetData()
  const getWelcomeData = useGetWelcomeImages()
  const [cart, setCart] = useState({})
  // cart : {itemID: amount}
  function bodyComponent() {
    switch (pageName) {
      case undefined:
        return <Welcome fetchState= {getWelcomeData}></Welcome>
      case 'shop':
        return <ShopMain fetchState = {getShopData} cartState={{cart, setCart}}></ShopMain>
      case 'cart':
        return <Cart fetchState= {getShopData} cartState={{cart, setCart}}></Cart>
    }
  }

  return (

    <div className={styles.app}>
      <NavBar></NavBar>
      {bodyComponent()}
    </div>

  )
}
