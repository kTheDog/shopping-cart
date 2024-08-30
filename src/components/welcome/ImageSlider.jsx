import { useState } from "react"

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
    justStart
  }
  = theme

  const imgAmount = 5

  let rightGrows = ['', '', growNorm, growBig, shrinkBig, shrinkNorm, '']
  let leftGrows = ['', shrinkNorm, shrinkBig, growBig, growNorm, '', '']
  const [imgSrcs, setImgSrcs] = useState(images)
  const [currentSlide, setCurrentSlide] = useState(slideRight)
  const [grows, setGrows] = useState(rightGrows)
  const [justify, setJustify] = useState([justEnd, '', '', '', '', '', justStart])
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
    console.log(grows)
    for (let i = 0; i < imgAmount + 2; i++) {

      let element =
        <div key = {i} className={imgWrapper + ` ` + grows[i] + ` ` + justify[i]}>
            <img className={currentSlide} src={imgSrcs[imgSrcIndex[i]]}></img>
        </div>;

      list.push(element)
    }
    return list
  }
  console.log(currentSlide, grows)


  return (
    <div  className={wrap}>
      <div key= {imgSrcs} className={allImgWrapper + ` ` }>
          {makeDivs(currentSlide, imgSrcs, grows)}
      </div>
      <button onClick={nextImg}>dasda</button>
      <button onClick={prevImg}>Prev</button>
    </div>
  )

}
