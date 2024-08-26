import ShopItem from "./ShopItem"
import propTypes from 'prop-types'
import styles from '../css/ItemList.module.css'
import { useEffect, useState } from "react"

export default function ItemList (props) {

  const {data} = props.fetchState
  const {shopGrid, gridWrapper, pagesWrapper} = styles
  const [page, setPage] = useState(1)

  console.log()
  function currentPageItems () {
    const itemsPerPage = 18

    let end = itemsPerPage * page
    let start = itemsPerPage * (page -1)
    end = Math.min(end, data.length)
    console.log(start, end, page, data.length)
    let currentItems = data.slice(start, end)

    return currentItems

  }


  function list () {

    let list = currentPageItems().map((instance) => {
      return <ShopItem
        key={instance.id}
        data={instance}
        cartState = {props.cartState}
      ></ShopItem>
    })

    return list
  }

  return (
    <div className={gridWrapper}>

      <div className={shopGrid}>
        {list()}
      </div>
      <div className={pagesWrapper}>
        <button onClick={() => {setPage(1)}}>1</button>
        <button onClick={() => {setPage(2)}}>2</button>
        <button onClick={() => {setPage(3)}}>3</button>
      </div>
    </div>
  )
}


ItemList.propTypes = {
  fetchState: propTypes.object,
  cartState: propTypes.object,
  imgHeight: propTypes.string
}
