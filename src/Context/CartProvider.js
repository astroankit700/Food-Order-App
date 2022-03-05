import React, { useState } from "react";
import CartContext from "./cart-context";

// import classes from "./CartProvider.module.css";

const CartProvider = (props) => {
    // const [] = useState();
    const addItemToCartHandler = () => {};

    const removeItemFromCartHandler = () => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
