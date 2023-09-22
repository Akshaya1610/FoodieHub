import React, { useEffect, useState, lazy,Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Main from "./components/Main";
import Error  from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet   } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider, useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import {useSelector} from "react-redux"

const About = lazy(()=> import("./components/About"));
const Contact = lazy(()=> import("./components/Contact"));

const AppComponent = () => {

    const [userName, setUserName] = useState();
    useEffect(()=> {
        // make an API to validate user
        //sample response
        const data = {
            name : "Akshaya"
       }
    setUserName(data.name)
    },[])

   return (  
       <UserContext.Provider value={ {loggedInUser:userName}}>
         <Provider store={appStore}>
            <div className="container">
                <Header></Header>
                <Outlet></Outlet>
                <Footer />
            </div>
        </Provider>
        </UserContext.Provider>
  )};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppComponent></AppComponent>,
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/main",
                element:<Main />
            },
            {
                path:"/about",
                element:<Suspense fallback={<h2>Loading...</h2>}><About /></Suspense>
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h2>Loading...</h2>}><Contact/></Suspense>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart />
            },
        ],
        errorElement : <Error />
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router ={appRouter} />);
