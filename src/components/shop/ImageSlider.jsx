import styles from '../css/ItemPage.module.css'
import { useState, useEffect } from 'react'
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


export default function ImageSlider ({images}) {

  const imgAmount = images.length
  const [currentImg, setCurrentImg] = useState(0)
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
    <>
      <div className={imgWrapper}>
        <img className={itemImage} key={currentImg}src={images[currentImg]}></img>
      </div>
      <div className={imgSlider}>
        <button onClick={prevImg}>Prev</button>
        <button onClick={() => {setCurrentImg((old) => nextImg(old))}}>Next</button>
      </div>
    </>
  )
}
