
import styles from '../css/Cart.module.css'

export default function Total({cart, data}) {


  const total = () => {
    let sum = 0
    for (let key in cart) {
      let itemId = key
      sum += cart[itemId] * data[itemId].price
    }
    return sum
  }

  const priceList = () => {
    let list = []

    for (let key in cart) {
      let itemID = key
      let amount = cart[itemID]
      let price = data[itemID].price
      if (amount == 0) {continue}
      let element = (
        <>
          <div className={styles.sheetAmount + ` ` + styles.sheetBorder}> x{amount}</div>
          <div className={styles.sheetPrice}>${price}</div>
        </>
      )
      list.push(element)
    }
    return list
  }

  return (
    <div className={styles.totalWrapper}>
      <div className={styles.total}>
        {total()}$
      </div>
      <div className={styles.priceSheet}>

        {priceList()}
      </div>
    </div>
  )

}
