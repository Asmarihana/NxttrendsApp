import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <div className="cart-summary-container">
          <div className="cart-summary">
            <h1 className="heading-cart-item">
              Order Total:
              <span className="total-price">Rs {total}/- </span>
            </h1>
            <p className="para-cart-item">{cartList.length} items in cart</p>
            <button type="button" className="button-checkout">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
