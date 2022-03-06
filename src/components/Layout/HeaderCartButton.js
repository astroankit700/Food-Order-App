import React, { useContext } from "react";
import CartContext from "../../Context/cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext); //This component will be re-evaluated whenever the context changes

    const numberOfCartitems = cartCtx.items.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartitems}</span>
        </button>
    );
};

export default HeaderCartButton;
