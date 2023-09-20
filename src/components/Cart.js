import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, clearResId } from "../utils/cartSlice";
import { Link } from 'react-router-dom';


const Cart = () => {
    
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(clearResId())
    }
const cartItems = useSelector((store)=> store.cart.items)
   const calculateTotalPrice = () => {
        let totalPrice =0 ;
        cartItems.map((element) => {
        totalPrice = totalPrice  + element.card.info.price /100 ;
        })
        return totalPrice
     
   }
    
    return (
        
        <div className="">
            {
                cartItems.length !== 0  ?
                <div className="cart-btn-container">
                    <button className="btn cart" onClick={handleClearCart}>clear cart</button>
                </div> : <div> </div>
            }
            <div className="">
               
               {
                 cartItems.length === 0 ? 
                 <div className="cart-container">
                    <div className="">
                        <img src= {require('/assets/cart-icon.png')} className="cart-icon-container"  alt="cart-Icon"  /> 
                        <div className="cart-heading">Your cart is empty</div>
                        <div className="cart-section-text">Click See Restaurants to view more restaurants</div>
                        <Link  className="link"  to="/"> <div className="res-btn"><button className="btn">See Restaurants</button></div></Link>
                    </div>
                </div>
                    : 
                    
                    <div className="cart-item-box">
                        <ItemList items = {cartItems}></ItemList>
                        <div className="totalPrice">
                     <h2>Total : ₹{calculateTotalPrice()}</h2>
                    </div>
                    </div>
                    
               }

            </div>
        </div>
    )
}

export default Cart;