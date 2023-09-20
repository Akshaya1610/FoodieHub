import { useState,useEffect } from "react";
import { REST_URL } from "../utils/constants";

const useRestaurantMenu = (id)=>{

    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();
    },[])
    
    const fetchMenu = async () =>{
        const data = await fetch(REST_URL + id )
        const json = await data.json();
        setResInfo(json)
      
    }
    return resInfo;
}

export default useRestaurantMenu;