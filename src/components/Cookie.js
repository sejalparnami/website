import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/cart.context";

import {
    Button,
    Flex,
    Image,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/core";

function Cookie(props) {
    const prices = 50;
    const [formState, setFormState] = useState(1);
    const handleChange = (e) => {
        let tarValue = parseFloat(e);
        // console.log(tarValue);
        setFormState(tarValue);
    };

    const getPrice = () => {
        let totalPrice = 0.0;
        totalPrice = prices * formState;
        // console.log(formState);
        return totalPrice;
    };

    const { addItem } = useContext(CartContext);
    const addToCart = (e) => {
        e.preventDefault();
        // console.log(e);
        const getPrice = () => {
            let totalPrice = 0.0;
            totalPrice = prices * formState;

            return totalPrice;
        };

        let price = getPrice();

        let itemToAdd = {
            name: props.name,
            size: "None",
            number: formState,
            price: price,
            addOn: "None",
            type: props.category,
        };

        addItem(itemToAdd);
    };
    return (
        <Flex
            minW="360px"
            maxW="360px"
            // width="300px"
            mr="1rem"
            ml="1rem"
            bg=" #b76658"
            w="100%"
            flexDirection="column"
            rounded="10px"
            // p="1rem"
        >
            <Image
                src={props.image}
                alt={props.name}
                objectFit="contain"
                roundedTop="10px"
            />
            <Flex
                pr="1rem"
                pl="1rem"
                pb="1rem"
                color="white"
                height="100%"
                justifyContent="space-between"
                direction="column"
            >
                <Flex justifyContent="space-between" align="center" mb="1rem">
                    <Text as="h2" fontSize="1.5rem">
                        {props.name}
                    </Text>
                    <Text as="h3" fontSize="1.5rem">
                        ₹{getPrice()}
                    </Text>
                </Flex>
                <form onSubmit={addToCart}>
                    <Flex justifyContent="space-between" direction="row">
                        <NumberInput
                            variant="outline"
                            defaultValue={1}
                            min={0}
                            max={100}
                            onChange={handleChange}
                            color="brandDark.400"
                            // size="xs"
                            rounded="6px"
                            width="100px"
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Button
                            leftIcon="addToCart"
                            color="brandDark.400"
                            type="submit"
                        >
                            Add to Cart
                        </Button>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    );
}

export default Cookie;
