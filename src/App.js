import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Context/CartProvider";

function App() {
    const [cartOpenStatus, setCartOpenStatus] = useState(false);

    const showCartHandler = () => {
        setCartOpenStatus(true);
    };
    const hideCartHandler = () => {
        setCartOpenStatus(false);
    };

    return (
        <CartProvider>
            {cartOpenStatus && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
