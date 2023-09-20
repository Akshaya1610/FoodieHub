import "@testing-library/jest-dom" ;
import  {fireEvent, render,screen} from "@testing-library/react";
import MockResData from "../Mocks/MockResData.json"
import Main from "../Main"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch  = jest.fn(()=> {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MockResData)
        }
    })
})
test("should Search for Sweets test input", async() => {
   await act(async() => 
    render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>) 
   ) 

   
   const BeforeClickcard = screen.getAllByTestId("resCard")

   expect(BeforeClickcard.length).toBe(9);

   const searchButton = screen.getByRole("button",  {name:"Search"});
   const searchInput = screen.getByTestId("searchinput");

   fireEvent.change(searchInput, {target : { value: "Sweets" } });
   fireEvent.click(searchButton);

   const cardAfterClick = screen.getAllByTestId("resCard")
   
   expect(cardAfterClick.length).toBe(1);

 })

test("should display top rated restaurants", async ()=>{
    await act(async() => 
    render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>) 
   ) 
   const beforeClickResCard = screen.getAllByTestId("resCard")
   expect(beforeClickResCard.length).toBe(9)
   const topRatedbutton = screen.getByTestId("topRatedRes");
   fireEvent.click(topRatedbutton);
   const afterClickResCard = screen.getAllByTestId("resCard")
   expect(afterClickResCard.length).toBe(8)


})
