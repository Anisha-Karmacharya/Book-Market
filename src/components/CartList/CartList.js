import { useSelector } from "react-redux";
import { convertPrice } from "../../utils/helpers";
import CartComponent from "../CartComponent/CartComponent";
import "./CartList.scss"

const Cart = () => {
    const state = useSelector(state => state.cart)

    const totalAmount = (cartList) => {
        let cost = 0;
        cartList.map((cart) => {
            let price = cart.price.replace('$', '');
            cost += price * cart.cartQuantity;
            return cost
        })
        return convertPrice('$' + cost)

    }
    if (state.cartItems.length === 0) {
        return (
            <div className="borderoutline">
            <div><h1 className="text-center mb-5 itemInCart">Items in Cart</h1>
            <div className="card mb-5 amount">
                <div class="card-body">
                    <h5 class="card-title text-center">Cart is Empty</h5>
                </div>
                
            </div>
            </div>
            </div>
        )
      }
    

    return (
        <div className="borderoutline">
            <div><h1 className="text-center mb-5 itemInCart">Items in Cart</h1>
            <div className="card mb-5 amount">
                <div class="card-body">
                    <h5 class="card-title">Total Amount: Nrs {(totalAmount(state.cartItems))}</h5>
                </div>
                
            </div>
            </div>
            <div className="card mb-4">
                {state.cartItems.map((item) => <CartComponent item={item} key={item.id} />)}
            </div>


        </div>
    );
}

export default Cart;
