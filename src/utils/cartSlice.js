import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        id : [],
        users:[],
    },
    reducers :{
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        addRestId : (state, action) => {
            state.id.push(action.payload);
        },
        clearResId : (state) => {
            state.id.length = [];
        },
        removeItem : (state,action) => {
            state.items.splice(action.payload , 1)
        },
        clearCart : (state) => {
            state.items.length = [];
        },
        addUser :(state, action) =>{
            state.users.push(action.payload)
        },
        removeUser : (state) => {
            state.users.length = [];
        }
    }

})

export const  {addItem , removeItem, clearCart, addRestId, clearResId, addUser, removeUser} = cartSlice.actions;
export default cartSlice.reducer ;