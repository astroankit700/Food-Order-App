import React, { useContext, useState } from "react";
import CartContext from "../../Context/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    {...item}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                ></CartItem>
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button
                className={classes["button--alt"]}
                onClick={props.onHideCart}
            >
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    return (
        <Modal onClose={props.onHideCart}>
            {!hasItems && <h1>Your cart is empty!</h1>}
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onHideCart} />}
            {!isCheckout && modalActions}
        </Modal>
    );
};

export default Cart;
