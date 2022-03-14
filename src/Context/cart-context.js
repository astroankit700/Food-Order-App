import React from "react";

//provides better auto completion
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

export default CartContext;
