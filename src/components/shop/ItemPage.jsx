import { useParams } from "react-router-dom";
import styles from '../css/ItemPage.module.css'
import starIcon from '../../assets/star.svg'
import stockIcon from '../../assets/box.svg'
import cartIcon from '../../assets/cart2.svg'
import IncrementBuy from "./IncrementBuy";
import { useEffect, useState } from "react";

export default function ItemPage (props) {
  const {category, description, id, price, rating, title, images} = props.data
  const {cart, setCart} = props.cartState
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

  const imgAmount = images.length
  const [currentImg, setCurrentImg] = useState(0)
  const amountInCart = cart[id]
  function inCart () {
    return amountInCart > 0
  }
  useEffect(() => {
    const ref = setInterval(() => {
      setCurrentImg(old => nextImg(old))
    }, 4000)

    return () => clearInterval(ref)
  },[])
  function nextImg (currentImg) {
    let newImg = 0
    console.log(currentImg)
    if (currentImg == imgAmount - 1) {
      newImg = 0
    } else
    if (currentImg < imgAmount -1){
      newImg = currentImg + 1
    }
    //on currentImg: slide to left, make display none !!disapearToLeft
    //on newImg: slide in from right, make display visible
    return newImg
  }
  console.log(currentImg, imgAmount)

  function prevImg () {
    let newImg = -1
    if (currentImg == 0) {
      newImg = imgAmount -1
    } else
    if (currentImg > 0){
      newImg = currentImg -1
    }
    // on currentImg: slide to right (keep) make display none
    // on newImg: make display visible slide in from left, make dis
    setCurrentImg(newImg)
    return
  }
  return (
    <div className={itemPageWrapper}>
      <h2 className={itemTitle}>{title}</h2>
      <div className={imgWrapper}>
        <img className={itemImage} key={currentImg}src={images[currentImg]}></img>
      </div>
      <div className={imgSlider}>
        <button onClick={prevImg}>Prev</button>
        <button onClick={() => {setCurrentImg((old) => nextImg(old))}}>Next</button>
      </div>
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
          {/* {inCart() ? <IncrementBuy theme = {styles} id = {id} cartState={props.cartState}></IncrementBuy> : buyButton} */}
          <IncrementBuy theme = {styles} id = {id} cartState={props.cartState}></IncrementBuy>
        </div>
      </div>
    </div>
  )
}
