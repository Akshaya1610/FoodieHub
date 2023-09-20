import ItemList from './ItemList'

const RestaurantCategory = ({data, restId, showItems, setShowIndex} ) => {
   
    const menuCount = data?.categories ?  data?.categories.length  : data?.itemCards.length
    const resId = restId;
    const itemCards = data?.itemCards ?  data?.itemCards : data?.categories[0]?.itemCards;
    const menuAccordion = () => {
        setShowIndex(showItems);
    }

    return (
        <div>
            <div className='menu-card' onClick={menuAccordion}>
                <div className='row'>
                    <span className='menu'>{data.title} ({menuCount})</span>
                    <span>
                     { showItems ? <img src= {require('/assets/uparrow.png')} className="down" alt="logo"  />
                       :  <img src= {require('/assets/downarrow.jpg')} className="down" alt="logo"  /> 
                     }
                    </span>
                </div>
            </div>

            <div className='accordion body'>
               {showItems && <ItemList  items = {itemCards}
                                        resId = {resId} />
                } 
            </div>
          
            
        </div>
    )
}

export default RestaurantCategory;