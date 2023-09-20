import { useDispatch ,useSelector} from "react-redux";
import { addItem ,removeItem, addRestId,clearResId} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items, resId}) => {

    const cartItems = useSelector((store)=> store.cart.items)
    const restaurantId = useSelector((store)=> store.cart.id)

    const dispatch = useDispatch()
   
    const id = resId;
   
    const handleAddItem = (item) => {
        if(!restaurantId[0] || id === restaurantId[0] || id === undefined ){
            dispatch(addItem(item));
            if(id !== restaurantId[0]){
                dispatch(addRestId(id));
            }
        }else{
            console.log("DO you want to clear the chart and change restaurant")
        }
        
    }
    const filteredItem = items.filter((value , index ,self) => 
    
    index === self.findIndex(element => element.card.info.id === value.card.info.id))
  
    const handleRemoveItem = (id) => {
        const index = cartItems.findIndex(element => element.card.info.id === id)
        index !== -1 && dispatch(removeItem(index))
        if(cartItems.length === 1){
            dispatch(clearResId())
        }
    }

    return (
        <div className="">
            {filteredItem?.map((item)=> (
                <div key={item?.card?.info?.id} className="horizondal-bar">
                    <div  className="content">
                        <div className="">
                            <h3 className="content-text">{item?.card?.info?.name}</h3>
                            <p className="text-strong">₹{item?.card?.info?.price ? item?.card?.info?.price/100 : 279 }</p>
                            <p className="sub-text">{item?.card?.info?.description}</p>

                        </div>
                        <div className="">
                        { item?.card?.info?.imageId ?
                        <img className="food-image" src= {CDN_URL + item?.card?.info?.imageId } /> : <span />
                        }
                        {
                        cartItems.find((element) => element.card.info.id === item.card.info.id) ?
                        <div className="cart-btn">
                            <button className="remove-btn" onClick={() => handleRemoveItem(item.card.info.id)}>-</button>
                            <span className="">{cartItems.filter(element => element.card.info.id === item.card.info.id).length}</span>
                            <button className="add-more-btn" onClick={() => handleAddItem(item)}>+</button>
                        </div> 
                        : 
                        <div className="">
                        <button className="cart-btn add-btn" onClick={()=> handleAddItem(item)}>Add</button>
                            </div>
                       }
                        </div>
                 
                    </div>
                    <hr></hr>
                </div>   
            ))}
           
        </div>
    )
}


export default ItemList;