import plusIcon from '../../assets/plus.svg'
import minusIcon from '../../assets/minus.svg'

export default function IncrementBuy ({id, cartState, theme, buyText}) {
  let {cart, setCart} = cartState
  let amountInCart = cart[id]

  function increaseAmount() {
    let newProperty = {[id]: (amountInCart || 0) + 1}

    setCart(oldCart => Object.assign({}, oldCart, newProperty))
  }
  function decreaseAmount() {
    if(amountInCart <= 0) {throw new Error('Not supposed to happen')}

    let newProperty = {[id]: amountInCart - 1}

    setCart(oldCart => Object.assign({}, oldCart, newProperty))
  }

  function handleBuy() {

    let newProperty = {[id]: (amountInCart || 0) + 1}

    setCart(oldCart => Object.assign({}, oldCart, newProperty))
  }


  const increment = () => {
    return (

      <div className={theme.incrementWrapper}>
        <button className={theme.decrease} onClick={decreaseAmount}>
          <img src={minusIcon} alt="" />
        </button>
        {amountInCart}
        <button className={theme.increase} onClick={increaseAmount}>
          <img src={plusIcon} alt="" />
        </button>
      </div>
    )
  }

  let buyButton = <button className={theme.buyItem} onClick={handleBuy}>{buyText || 'Add to cart'}</button>
  return (
    <>
      {amountInCart > 0 ? increment() : buyButton}
    </>
  )

}

