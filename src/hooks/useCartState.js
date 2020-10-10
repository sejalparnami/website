import useLocalStorageState from "./useLocalStorageState";
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
