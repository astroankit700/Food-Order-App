import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnBump, setBtnBump] = useState(false);

    const cartCtx = useContext(CartContext); //This component will be re-evaluated whenever the context changes

    const numberOfCartitems = cartCtx.items.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    const btnClasses = `${classes.button} ${
        btnBump === true ? classes.bump : ""
    }`;

    useEffect(() => {
        if (numberOfCartitems === 0) return;
        setBtnBump(true);
        const timer = setTimeout(() => {
            setBtnBump(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [numberOfCartitems]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartitems}</span>
        </button>
    );
};

export default HeaderCartButton;
