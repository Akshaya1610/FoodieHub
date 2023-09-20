import  {render, screen} from "@testing-library/react";

import "@testing-library/jest-dom" ;
import RestaurentContainer from "../RestaurentContainer";
import MockData from "../Mocks/MockData.json"

it("Should render restaurant card with props", ()=>{

    render(<RestaurentContainer resData={MockData}></RestaurentContainer>)
    
    const name = screen.getByText("A2B - Adyar Ananda Bhavan");
    expect(name).toBeInTheDocument();

})

// it("Should render restaurant card with discount label", ()=>{

    
//     const resDiscount = WithDiscountLabel(RestaurentContainer)
//     render(resDiscount)
//     const discountLabel = screen.getByText("₹125 OFF ABOVE ₹249");
//     expect(discountLabel).toBeInTheDocument();

// })