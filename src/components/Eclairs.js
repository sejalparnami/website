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

function Eclairs(props) {
    const prices = [150, 1100];
    const [formState, setFormState] = useState({
        size: "Individual",
        addOn: "None",
        number: 1,
    });
    const handleChange = (e) => {
        let tarName = e.target.name;
        let tarValue = e.target.value;
        setFormState({ ...formState, [tarName]: tarValue });
    };
    const handleNumberChange = (e) => {
        let tarValue = e;
        // console.log(tarValue);
        setFormState({ ...formState, number: tarValue });
    };

    const getPrice = () => {
        let totalPrice = 0.0;
        switch (formState.size) {
            case "Individual": {
                totalPrice = prices[0];
                break;
            }
            case "Box of 8": {
                totalPrice = prices[1];
                break;
            }
            default:
                totalPrice = 0;
        }
        if (formState.addOn !== "None") {
            totalPrice += 10;
        }
        return totalPrice * formState.number;
    };

    const { addItem } = useContext(CartContext);
    const addToCart = (e) => {
        e.preventDefault();
        // console.log(e);
        const getPrice = () => {
            let totalPrice = 0.0;
            switch (formState.size) {
                case "Individual": {
                    totalPrice = prices[0];
                    break;
                }
                case "Box of 8": {
                    totalPrice = prices[1];
                    break;
                }
                default:
                    totalPrice = 0;
            }
            if (formState.addOn !== "None") {
                totalPrice += 10;
            }
            return totalPrice * formState.number;
        };

        let price = getPrice();

        let itemToAdd = {
            name: props.name,
            size: formState.size,
            number: formState.number,
            price: price,
            addOn: formState.addOn,
            type: props.category,
        };

        addItem(itemToAdd);

        // setCart([
        //     ...cart,
        //     {
        //         id: uuidv4(),
        //         name: props.name,
        //         size: formState.size,
        //         number: 1,
        //         priceOfOne: price,
        //         addOn: formState.addOn,
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
                        ₹{getPrice()}
                    </Text>
                </Flex>
                <form onSubmit={addToCart}>
                    <Text fontSize="14px">Size</Text>
                    <RadioGroup
                        onChange={handleChange}
                        name="size"
                        defaultValue="Individual"
                        isInline
                        mb="0.5rem"
                        // mt="0.25rem"
                    >
                        <Radio variantColor="brandLight" value="Individual">
                            Individual
                        </Radio>
                        <Radio variantColor="brandLight" value="Box of 8">
                            Box of 8
                        </Radio>
                    </RadioGroup>

                    <Text fontSize="14px">Add Ons</Text>
                    <RadioGroup
                        onChange={handleChange}
                        name="addOn"
                        defaultValue="None"
                        isInline
                        mb="0.5rem"
                        // mt="0.25rem"
                    >
                        {props.addOns.map((addOn, index) => {
                            return (
                                <Radio
                                    key={index}
                                    variantColor="brandLight"
                                    value={addOn}
                                >
                                    {addOn}
                                </Radio>
                            );
                        })}
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

export default Eclairs;
