import { CDN_URL} from "../utils/constants"

const RestaurentContainer = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.card?.card?.info
    const { slaString} = resData?.card?.card?.info?.sla


    return (
        <div className="res-card" data-testid="resCard" >
            <img   src={CDN_URL + cloudinaryImageId}
              className="rest-logo"
              alt="rest-logo"  />
            <h3 className="header-alignemnet">{name}</h3>
            <h5 className="header-alignemnet">{cuisines.join(', ')}</h5>
            <h4 className="header-alignemnet"><span><img  className="star" src= {require('/assets/star.png')} /></span>
                {avgRating} <strong>.{slaString}</strong> </h4>
            
            <h3 className="text-strong header-alignemnet">{costForTwo}</h3>
        </div>
    )
}
export default RestaurentContainer;

export const  WithDiscountLabel = (RestaurentContainer) => {
    return (props) => {
           const {resData} = props;
        const {header, subHeader } = resData?.card?.card?.info?.aggregatedDiscountInfoV3;
        return (
            <div>
                <strong
                className="discountLabel">{header +" "+subHeader}</strong>
                <RestaurentContainer {...props} />
                
            </div>
          
        )
            
    }
}