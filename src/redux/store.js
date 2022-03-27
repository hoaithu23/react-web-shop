import { configureStore } from "@reduxjs/toolkit";
import productModelSlice from "./product-model/productModelSlice";
import cartItemsSlide from "./cart/cartItemsSlide";
export const store = configureStore({
    reducer:{
        productModel: productModelSlice,
        cartItems: cartItemsSlide
    }
})