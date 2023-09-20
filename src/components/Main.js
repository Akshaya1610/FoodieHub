import RestaurentContainer, { WithDiscountLabel } from "./RestaurentContainer";
import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const Main = () => {
    //state variable

    const [listOfRestaurants, setListOfrestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
   
    useEffect(()=>{
        fetchData();
    }, []);
    
    const DiscountLabel = WithDiscountLabel(RestaurentContainer)
    const fetchData = async() =>{
        const data = await fetch(RES_URL)
        const json = await data.json();
        const newJson = json?.data?.cards.slice(3);
         setListOfrestaurants(newJson)
         setFilteredRestaurant(newJson)
    }
   
    if(listOfRestaurants?.length === 0){
        return <Shimmer />
    }
    return (
        <div className="main">
            <div className="search-bar">
                <input type="text" 
                    className="search" 
                    data-testid="searchinput"
                    placeholder="Search" 
                    value = {searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                <button  className="btn search-btn" 
                    onClick= { () => {
                      const  filteredRestaurants = listOfRestaurants.filter((res) =>
                         res.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                      );
                      setFilteredRestaurant(filteredRestaurants);
                    }
                    }
                >Search </button>
            </div>
            <div className="filter">
                <button className="top-rated btn"
                  data-testid="topRatedRes"
                  onClick={ () => {
                    const filteredList = listOfRestaurants.filter( 
                        (res) => res.card?.card?.info?.avgRating >= 4.5)
                        setFilteredRestaurant(filteredList)
                        }}>
                 Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant => (
                <Link className="link" key={restaurant.card?.card?.info?.id} to={"/restaurant/"+restaurant.card?.card?.info?.id}>
                    { restaurant.card?.card?.info?.aggregatedDiscountInfoV3?.header ? 
                        (<DiscountLabel resData = {restaurant} />) 
                        : 
                        (<RestaurentContainer  resData = {restaurant} /> )
                    }
                </Link>
                ))}
            </div>
        </div>
    )}

export default Main;