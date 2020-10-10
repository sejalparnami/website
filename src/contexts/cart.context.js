import React, { createContext } from "react";
import useCartState from "../hooks/useCartState";

const initialCartItems = [];
// const initialCartItems = [
//     {
//         id: 1,
//         name: "Strawberry Cheesecake",
//         size: "1kg",
//         number: 3,
//         priceOfOne: 100,
//         addOn: "Hello",
//     },
//     {
//         id: 2,
//         name: "Blueberry Cheesecake",
//         size: "3kg",
//         number: 1,
//         priceOfOne: 400,
//         addOn: "None",
//     },
// ];

export const CartContext = createContext();

export function CartProvider(props) {
    const cartStuff = useCartState(initialCartItems);
    return (
        <CartContext.Provider value={cartStuff}>
            {props.children}
        </CartContext.Provider>
    );
}

// const initialCartItems = JSON.parse(window.localStorage.getItem("Cart") || "[]");

// const addItem = (item) => {
//     setCart([
//         ...cart,
//         {
//             id: uuidv4(),
//             name: item.name,
//             size: item.size,
//             number: item.number,
//             priceOfOne: item.price,
//             addOn: item.addOn,
//         },
//     ]);
// };

// const removeItem = (id) => {
//     const updatedCart = cart.filter((item) => item.id !== id);
//     setCart(updatedCart);
// };
