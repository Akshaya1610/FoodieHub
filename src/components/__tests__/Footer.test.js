import "@testing-library/jest-dom" ;
import  {render,screen} from "@testing-library/react";


import Footer from "../Footer";

describe("footerComponent", ()=> {

  beforeAll(()=>{
   console.log("Before All")
  })
  beforeEach(()=>{
   console.log("before Each and Every testcases")
  })
  afterAll(()=>{
   console.log("After all")
  })
  afterEach(()=>{
   console.log("After Each and every  test cases")
  })


   test("should load Footer component", () => {
    
      render(<Footer />)
      const text = screen.getByText("Foodie hub © 2023 XYZz Technologies Pvt. Ltd")
      expect(text).toBeInTheDocument();
  
   })
  
   test("should check heading present or not in footer component", () => {
      
      render(<Footer />)
      const text = screen.getByRole("heading")
      expect(text).toBeInTheDocument();
  
   })
})

