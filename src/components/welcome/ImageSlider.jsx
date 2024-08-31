import { useState } from "react"
import arrowLeft from '../../assets/arrow1.svg'
import arrowRight from '../../assets/arrow2.svg'

export default function ImageSlider(props) {

  let {theme, images} = props
  let {
    allImgWrapper,
    wrap,
    imgWrapper,
    slideRight,
    growBig,
    growNorm,
    shrinkBig,
    shrinkBigNorm,
    shrinkNorm,
    slideLeft,
    justEnd,
    justStart,
    imgWrapWrapper,
    fadeIn,
    buttonsWrapper,
    btn
  }
  = theme

  const imgAmount = 5

  let rightGrows = ['', fadeIn, growNorm, growBig, shrinkBig, shrinkNorm, '']
  let leftGrows = ['', shrinkNorm, shrinkBig, growBig, growNorm, '', '']
  const [imgSrcs, setImgSrcs] = useState(images)
  const [currentSlide, setCurrentSlide] = useState(slideRight)
  const [grows, setGrows] = useState(rightGrows)
  const [justify, setJustify] = useState([justEnd, '', '', '', '', '', justStart])
  const [wrapClass, setWrapClass] = useState(imgWrapWrapper)
  function nextImg () {
    let list = imgSrcs
    let n = [...list.slice(-1), ...list.slice(0, -1)]
    setImgSrcs(n)
    setCurrentSlide(slideRight)
    // setJustify(justStart)

    console.log(currentSlide)

    setGrows(rightGrows)
  }
  function prevImg () {
    let list = imgSrcs
    let n = [...list.slice(1), list[0]]
    setImgSrcs(n)
    setCurrentSlide(slideLeft)
    setGrows(leftGrows)
  }

  function makeDivs (currentSlide, imgSrcs, grows) {
    let list = []
    let imgSrcIndex = [4, 0, 1, 2, 3, 4, 0]
    for (let i = 0; i < imgAmount + 2; i++) {

      let element =

        <div key = {i} className={justify[i] + ` ` +   wrapClass } >
          <div  className={imgWrapper + ` ` + grows[i] + ` ` }>
              <img className={currentSlide} src={imgSrcs[imgSrcIndex[i]]}></img>
          </div>
        </div>
        ;

      list.push(element)
    }
    return list
  }


  return (
    <div  className={wrap}>
      <div key= {imgSrcs} className={allImgWrapper + ` ` }>
          {makeDivs(currentSlide, imgSrcs, grows)}
      </div>

      <div className={buttonsWrapper}>
        <button class={btn} onClick={prevImg}>
          <img src={arrowLeft} alt="" />
        </button>
        <button class={btn} onClick={nextImg}>
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  )

}
