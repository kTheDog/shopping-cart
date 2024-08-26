import { Link } from "react-router-dom";
import propTypes from 'prop-types'
import styles from '../css/ItemList.module.css'
import BuyItem from './BuyItem'
import { useEffect, useState } from "react";


export default function ShopItem (props) {

  const {data} = props
  const {cart, setCart} = props.cartState
  const {shopItem, shopImg, itemTitle, buyItem, price, imgContainer, buyWrapper} = styles

  function imgElement() {

    let imgStyle = {backgroundImage : `url("${data.images[0]}")`}
    let element = <div className={imgContainer}>
                    <div className={shopImg} style={imgStyle}></div>
                  </div>

    return element
  }
  return (
    <div className={shopItem}>

      <div className={itemTitle}>{data.title}</div>

      <Link to={`${data.id}`}>
        {imgElement()}
      </Link>
      <div className={buyWrapper}>
        <BuyItem data= {data} cartState= {props.cartState}></BuyItem>
        <div className={price}>{data.price}<span>$</span></div>
      </div>
    </div>
  )

}

ShopItem.propTypes = {
  data: propTypes.object,
  cartState: propTypes.object,
  imgHeight: propTypes.string
}
