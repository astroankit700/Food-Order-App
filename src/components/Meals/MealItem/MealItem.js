import React, { useContext } from "react";
import CartContext from "../../../Context/cart-context";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        const currItem = {
            ...props,
            amount,
        };
        cartCtx.addItem(currItem);
    };

    return (
        <li className={classes.meal} key={props.id}>
            <div>
                <h3> {props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
