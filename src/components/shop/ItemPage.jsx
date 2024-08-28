import { useParams } from "react-router-dom";
import styles from '../css/ItemPage.module.css'
import starIcon from '../../assets/star.svg'
import stockIcon from '../../assets/box.svg'
import cartIcon from '../../assets/cart2.svg'
import IncrementBuy from "./IncrementBuy";
import ImageSlider from "./ImageSlider";
import { useEffect, useState } from "react";

export default function ItemPage (props) {
  const {category, description, id, price, rating, title, images} = props.data
  const {
          itemImage,
          imgWrapper,
          itemPageWrapper,
          imgSlider,
          descriptionWrapper,
          itemTitle,
          buy,
          buySection,
          stock,
          stars,
          tagsWrapper
        } = styles



  return (
    <div className={itemPageWrapper}>
      <h2 className={itemTitle}>{title}</h2>
      <ImageSlider images={images}></ImageSlider>
      <div className={descriptionWrapper}>
        {description}
      </div>

      <div className={buySection}>
        <div className={tagsWrapper}>
          <div className={stars}>
            <span>{rating}</span>
            <img src={starIcon} alt="" />
          </div>
          <div className={stock}>
            <img src={stockIcon} alt="" />
            <span>In stock</span>
          </div>
        </div>
        <div className={buy}>
          <img src={cartIcon} alt="" />
          <IncrementBuy theme = {styles} id = {id} cartState={props.cartState}></IncrementBuy>
        </div>
      </div>
    </div>
  )
}
