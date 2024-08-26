import { useParams } from "react-router-dom";
import styles from '../css/ItemPage.module.css'
import { useState } from "react";

export default function ItemPage (props) {
  const {category, description, id, price, rating, title, images} = props.data
  const {itemImage, imgWrapper, itemPageWrapper, imgSlider, descriptionWrapper, itemTitle, buy} = styles

  const imgAmount = images.length
  const [currentImg, setCurrentImg] = useState(0)
  console.log(rating)

  console.log(props)

  function nextImg () {
    if (currentImg == imgAmount - 1) {
      setCurrentImg(0)
    } else
    if (currentImg < imgAmount -1){
      setCurrentImg(img => img + 1)
    }
    //on currentImg: slide to left, make display none !!disapearToLeft
    //on newImg: slide in from right, make display visible
    return
  }
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
        <img className={itemImage} src={images[currentImg]}></img>
        <div className={imgSlider}>
          <button onClick={prevImg}>Prev</button>
          <button onClick={nextImg}>Next</button>
        </div>
      </div>
      <div className={descriptionWrapper}>
        {description}
      </div>
      <div className={buy}>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
