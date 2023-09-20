import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import cartLogo from "../../assets/cart-icon.png"
import { removeUser} from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const cartItems = useSelector((store)=> store.cart.items)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.cart.users);
    useEffect(()=>{},[user])
    
    logout = () => {
        dispatch(removeUser());
        navigate("/")
    }

    return  (
    <div className="header">
        <div className="logo">
        <Link  className="link"  to="/main"><img src= {logo} className="logo"
            alt="logo"  /></Link>
        </div>
        <div className="nav-items">
            {user.length !==0 ?
                <ul>
                    <li>
                        <Link  className="link"  to="/cart">
                        <img src= {cartLogo} className="cart-logo"
                            alt="cart-Icon"  /> 
                            <sup className='total-items'>{cartItems.length} </sup>
                        </Link>
                    </li> 
                    <li> 
                        <Link className="link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link  className="link"  to="/contact">contact us </Link>
                    </li> 
                    <li>
                        <div className='username'> {user[0].displayName}</div>
                    </li>
                    <li>
                        <button className='login-btn' onClick={logout}>Logout</button>
                    </li> 
                </ul>   
                :<></> }
            </div>
    </div>
);
}
export default Header;