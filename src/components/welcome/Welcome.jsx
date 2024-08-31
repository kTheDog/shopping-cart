import styles from '../css/Welcome.module.css'
import slideStyles from '../css/ImageSlider.module.css'

import ImageSlider from './ImageSlider'
export default function Welcome(props) {

  let {data, error, loading} = props.fetchState
  if (loading) {return <div>Loading...</div>}
  let images = data.map(obj => {
    return obj.image
  })
  // 1 |2 3 4| 5
  // 5 |1 2 3| 4
  // 4 |5 1 2| 3

  return (
    <div>
      {/* <img src={data[0].image}></img> */}

      <div className={styles.fadeIn}>
        <ImageSlider images = {images} theme={slideStyles}></ImageSlider>
      </div>
    </div>
  )

}
