import React, { useState, useContext } from "react";

import { CartContext } from "../contexts/cart.context";

import {
    Box,
    Button,
    Flex,
    Image,
    Radio,
    RadioGroup,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/core";

function Granola(props) {
    const [formState, setFormState] = useState({
        size: "300gm",
        addOn: "None",
        number: 1,
    });
    const handleChange = (e) => {
        // console.log("On CHange Radio");
        let tarName = e.target.name;
        let tarValue = e.target.value;
        // console.log(tarName);
        // console.log(tarValue);
        setFormState({ ...formState, [tarName]: tarValue });
    };
    const handleNumberChange = (e) => {
        let tarValue = parseFloat(e);
        // console.log(tarValue);
        setFormState({ ...formState, number: tarValue });
    };

    const getPrice = () => {
        switch (formState.size) {
            case "300gm":
                return props.prices[0];
            case "500gm":
                return props.prices[1];
            case "1kg":
                return props.prices[2];
            default:
                return 0;
        }
    };

    const { addItem } = useContext(CartContext);
    const addToCart = (e) => {
        e.preventDefault();
        let price = 0;
        // console.log(props.prices);
        // console.log(parseFloat(props.prices[0]));
        // console.log(e.target.value + "target value");
        const getPrice = () => {
            switch (formState.size) {
                case "300gm":
                    return props.prices[0];
                case "500gm":
                    return props.prices[1];
                case "1kg":
                    return props.prices[2];
                default:
                    return 0;
            }
        };

        price = parseFloat(getPrice()) * formState.number;
        // console.log(price);

        let itemToAdd = {
            name: props.name,
            size: "None",
            number: formState.number,
            price: price,
            addOn: "None",
            type: props.category,
        };

        addItem(itemToAdd);

        // setCart([
        //     ...cart,
        //     {
        //         id: uuidv4(),
        //         name: props.name,
        //         size: e.target.value,
        //         number: 1,
        //         priceOfOne: price,
        //         addOn: "N",
        //     },
        // ]);
    };
    return (
        <Flex
            maxW="360px"
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
            <Box pr="1rem" pl="1rem" pb="1rem" color="white">
                <Flex justifyContent="space-between" align="center">
                    <Text as="h2" fontSize="1.5rem">
                        {props.name}
                    </Text>
                    <Text as="h3" fontSize="1.5rem">
                        ₹{parseFloat(getPrice()) * formState.number}
                    </Text>
                </Flex>
                <Box>
                    <Text as="p" fontSize="14px">
                        {props.description}
                    </Text>
                </Box>
                <form onSubmit={addToCart}>
                    <RadioGroup
                        onChange={handleChange}
                        name="size"
                        defaultValue="300gm"
                        isInline
                        mb="0.5rem"
                        mt="0.25rem"
                    >
                        <Radio variantColor="brandLight" value="300gm">
                            300gm
                        </Radio>
                        <Radio variantColor="brandLight" value="500gm">
                            500gm
                        </Radio>
                        <Radio variantColor="brandLight" value="1kg">
                            1kg
                        </Radio>
                    </RadioGroup>
                    <Flex justifyContent="space-between" direction="row">
                        <NumberInput
                            variant="outline"
                            defaultValue={1}
                            min={0}
                            max={100}
                            onChange={handleNumberChange}
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
            </Box>
        </Flex>
    );
}

export default Granola;
