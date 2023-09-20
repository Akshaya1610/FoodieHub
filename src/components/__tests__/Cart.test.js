import "@testing-library/jest-dom" ;
import  {fireEvent, render,screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"
import RestaurantMenu from "../RestaurantMenu"
import MENU_MOCK from "../Mocks/Menu.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MENU_MOCK)
        }}

    )
})


it("should add items to the cart", async () => {
    await act(async ()=> {render(<RestaurantMenu />)

    // const accordion = screen.getByText("Sweets (36)")
    // expect(accordion).toBeInTheDocument();
    })
})