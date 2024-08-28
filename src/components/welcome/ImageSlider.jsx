import { useState } from "react"



export default function ImageSlider(props) {

  const imgAmount = 5
  let {theme, images} = props
  let {
    sliderWrapper,
    sliderImg,
    currentImg,
    slide,
    imagesWrapper,
    displaySection
  }
  = theme
  console.log(images)
  let [classes, setClasses] = useState([sliderImg, sliderImg, sliderImg, sliderImg, sliderImg, imagesWrapper])
  // let [currentImages, setCurrentImages] = useState([0, 1, 2, 3, 4])
  let [currentImages, setCurrentImages] = useState(images)

  let [animation, setAnimation] = useState(slide)
  let [currImg, setCurrImg] = useState(2)

let nextImg = () => {
  let lastImg = currentImages[imgAmount-1]
  let newImages = [...currentImages.slice(-1), ...currentImages.slice(0, -1)]

  setCurrImg(newImages[Math.floor(imgAmount/2)])
  return newImages
}
  console.log(currImg)
  return (
    <>
      <div>
        <div className={slide} key={currImg}>
            <div key={0}className={classes[0]}>
              <img src={currentImages[0]} alt="" />
            </div>
            <div className={displaySection}>

              <div key={1}className={classes[1]}>
                <img src={currentImages[1]} alt="" />
              </div>
              <div key={2}className={classes[2]}>
                <img src={currentImages[2]} alt="" />
              </div>
              <div key={3}className={classes[3]}>
                <img src={currentImages[3]} alt="" />
              </div>
            </div>
            <div key={4}className={classes[4]}>
              <img src={currentImages[4]} alt="" />
            </div>
      </div>
      </div>
      <button onClick={() => {setCurrentImages(old => nextImg(old))}}>asdasdas</button>
    </>
  )
}
