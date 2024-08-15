import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {id}= useParams();
    const resInfo = useRestaurantMenu(id);
    const [showIndex, setShowIndex] = useState(null)
    
    if(resInfo === null){
        return <Shimmer></Shimmer>
    }
    const {name, cuisines,locality,avgRating,totalRatingsString,areaName} = resInfo.data?.cards[2]?.card.card?.info

    const nestedCategory = resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    const itemCategory = resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    const category = nestedCategory?.length !== 0 ? nestedCategory :  itemCategory;

    return (
        <div className="container-res">
            <div className="heading">
                <div className="">
                    <h3 className="header-text">{name}</h3>
                    <p className="sub-text">{cuisines.join(", ")}</p>
                    <p className="sub-text">{areaName}, {locality}</p>
                </div>
                <div className="align-right">
                    <div className="box">
                        <strong className="avg-rating"><img className="star" src= {require('/assets/star.png')}></img>{avgRating}</strong>
                        <hr></hr><p className="text-rating">{totalRatingsString}</p>
                    </div>
                </div>
            </div><div className="horizondal-line"></div>

            {
                category.map((menu, index) => (
                   
                  <RestaurantCategory  data-testid="accordion"
                    key={menu?.card?.card.title} 
                    data = {menu?.card?.card}
                    restId = {resInfo.data?.cards[0]?.card.card?.info?.id}
                    showItems = {index === showIndex ? true : false}
                    setShowIndex = {
                        () => {
                            const isExpanded =  showIndex === index;
                            return setShowIndex(isExpanded ? null : index)
                        }
                       
                    }
                    />
                ))
            }

        </div>
    )}
export default RestaurantMenu;