import { useState } from "react"

export default function ImageSlider(props) {

  const imgAmount = 5
  let {theme, images} = props
  let {
    sliderWrapper,
    displaySection,
    sliderImg,
    currentImg,
    shrink,
    slideRight,
    growRight,
    shrinkRight,
    allImgWrapper,
    imageWrapper,
    wrap,
    growRightNorm,
    growLeftNorm,
    growRightBig,
    growLeftBig,
    shrinkRightNorm,
    shrinkLeftNorm,
    shrinkRightBig,
    shrinkLefttBig,
  }
  = theme
  const [imgSrcs, setImgSrcs] = useState(images)



  const [imgClasses, setImgClasses] = useState(determineAnimation('right'))
  function imgDivs(imgAmount, images) {

  }

  function nextImg () {
    let list = imgSrcs
    let n = [...list.slice(-1), ...list.slice(0, -1)]
    setImgSrcs(n)
    setImgClasses(determineAnimation('right'))
  }

  function determineAnimation (direction) {
    let classes = []
    if (direction == 'right') {

      classes = [slideRight, slideRight, growRightNorm, growRightBig, shrinkRightBig, shrinkRightNorm, slideRight]

      for (let i in classes) {
        i = i + ` ` + imageWrapper
      }
      classes = classes.map(c => {return c + ` ` + imageWrapper})
    }
    return classes
  }

  return (
    <div  className={wrap}>
      <div key= {imgSrcs} className={allImgWrapper}>
          <div className={imgClasses[0]}>
            <img src={imgSrcs[4]} alt="" />
          </div>
          <div className={imgClasses[1]}>
            <img src={imgSrcs[0]} alt="" />
          </div>
          <div className={imgClasses[2]}>
            <img src={imgSrcs[1]} alt="" />
          </div>
          <div className={imgClasses[3]}>
            <img src={imgSrcs[2]} alt="" />
          </div>
          <div className={imgClasses[4]}>
            <img src={imgSrcs[3]}></img>
          </div>
        {/* </div> */}
          <div className={imgClasses[5]}>
            <img src={imgSrcs[4]} alt="" />
          </div>
          <div className={imgClasses[6]}>
            <img src={imgSrcs[0]} alt="" />
          </div>
      </div>
      <button onClick={nextImg}>dasda</button>
    </div>
  )

}
