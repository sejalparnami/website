import useLocalStorageState from "./useLocalStorageState";
// import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default (initialCart) => {
    const [cart, setCart] = useLocalStorageState("Cart", initialCart);
    // const [cart, setCart] = useState(initialCart);
    return {
        cart,
        addItem: (item) => {
            console.log(item);
            setCart([
                ...cart,
                {
                    id: uuidv4(),
                    name: item.name,
                    size: item.size,
                    number: item.number,
                    priceOfOne: item.price,
                    addOn: item.addOn,
                    type: item.type,
                },
            ]);
        },
        removeItem: (id) => {
            const updatedCart = cart.filter((item) => item.id !== id);
            setCart(updatedCart);
        },
    };
};

// const [cart] = useLocalStorageState("Cart", [])
// const initialCartItems = JSON.parse(
//     window.localStorage.getItem("Cart") || "[]"
// );

// const initialCartItems = [
//     {
//         id: 1,
//         name: "Strawberry Cheesecake",
//         size: "1kg",
//         number: 3,
//         priceOfOne: 100,
//         addOn: "None",
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
// const { cart, addItem, removeItem } = useCartState(initialCartItems);

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
