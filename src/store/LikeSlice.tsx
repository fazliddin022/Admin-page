import { createSlice } from "@reduxjs/toolkit";
import type { ProductsType } from "../@types";

const initialState:{likeList:ProductsType[]} = {
    likeList:[]
}
export const LikeSlice = createSlice({
    name:"LikeList",
    initialState,
    reducers:{
        collectLikeProduct:(state, actions:{payload:ProductsType}) => {
            state.likeList = [...state.likeList, actions.payload]
        }
    }
})

export const {collectLikeProduct} = LikeSlice.actions