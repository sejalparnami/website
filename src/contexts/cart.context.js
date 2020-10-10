import React, { createContext } from "react";
import useCartState from "../hooks/useCartState";

const initialCartItems = [];

export const CartContext = createContext();

export function CartProvider(props) {
    const cartStuff = useCartState(initialCartItems);
    return (
        <CartContext.Provider value={cartStuff}>
            {props.children}
        </CartContext.Provider>
    );
}
