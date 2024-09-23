import { createSlice } from "@reduxjs/toolkit";


export const counter = createSlice({ 
    name :"counter",
    initialState:{
        value:0,
    },
    reducers:{
        increment:(number)=>{
            number.value += 1
        },
        decrement:(number)=>{
            number.value -= 1
        },
        increaseAmount : (number, action)=>{
            number.value += action.payload
        }
    }
})

export const {increment, decrement, increaseAmount} = counter.actions

export default counter.reducer