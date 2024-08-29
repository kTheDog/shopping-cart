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
    wrapper
  }
  = theme
  const [imgSrcs, setImgSrcs] = useState(images)
  function imgDivs(imgAmount, images) {

  }

  function nextImg () {
    let list = imgSrcs
    let n = [...list.slice(-1), ...list.slice(0, -1)]
    setImgSrcs(n)
  }

  return (
    <div key= {imgSrcs} className={wrapper}>
      <div className={sliderWrapper}>
          <div className={slideRight}>
            <img src={imgSrcs[0]} alt="" />
          </div>
        {/* <div className={displaySection}> */}
          <div className={slideRight}>
            <img src={imgSrcs[1]} alt="" />
          </div>
          <div className={growRight}>
            <img src={imgSrcs[2]} alt="" />
          </div>
          <div className={shrinkRight}>
            <img src={imgSrcs[3]}></img>
          </div>
        {/* </div> */}
        <div className={slideRight}>
            <img src={imgSrcs[4]} alt="" />
          </div>
      </div>
      <button onClick={nextImg}>dasda</button>
    </div>
  )

}
