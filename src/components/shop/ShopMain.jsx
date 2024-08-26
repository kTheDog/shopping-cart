
import { useParams } from "react-router-dom"
import ItemPage from "./ItemPage"
import ItemList from "./ItemList"
import propTypes from 'prop-types'

export default function ShopMain(props) {

  const {itemID} = useParams()
  const {data, loading, error} = props.fetchState


  if (error) {
    console.log(error)
    return(
      <div>
        Network error... please refresh
      </div>
    )
  }
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }


  return (
    <>
      {
        itemID ?
        <ItemPage data={data[itemID-1]}></ItemPage>
         :
        <ItemList fetchState={props.fetchState} cartState={props.cartState}></ItemList>
      }
    </>
  )
}


ShopMain.propTypes = {
  fetchState: propTypes.object,
  cartState: propTypes.object
}
