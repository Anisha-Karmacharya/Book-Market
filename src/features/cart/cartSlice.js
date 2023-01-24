import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex < 0) {
                if (state.cartItems.length >= 5 ) {
                    alert("CART IS FULL!! only 5 different types of books can be added")
                    return;
                };
                state.cartItems.push({ ...action.payload, cartQuantity: 1 });
                
            } else {
                if (state.cartItems[itemIndex].cartQuantity < action.payload.stock) {
                    state.cartItems[itemIndex].cartQuantity++;
                }else{
                    alert("OUT OF STOCK");
                }
            }

        },
        removeFromCart(state, action) {
            const tempList = state.cartItems.filter(item => item.id !== action.payload)
            state.cartItems = tempList
            alert("ITEM DELETED FROM CART");
        },
        decreaseCount(state, action) {
            const index = state.cartItems.findIndex( item => item.id === action.payload);
            state.cartItems[index].cartQuantity < 1 ? state.cartItems.splice(index, 1) : state.cartItems[index].cartQuantity--;
            alert("ITEM REMOVED FROM CART");
        }

    }
})

export const { addToCart, removeFromCart, decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;
