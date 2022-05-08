import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) =>{
    console.log(products);
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectedProduct = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product,
    }
}
export const removeSelectedProduct = () =>{
    return {
        type:ActionTypes.REMOVE_SELETED_PRODUCT,
    }
}
