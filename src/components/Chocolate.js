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

function Chocolate(props) {
    const prices = 200;
    const [formState, setFormState] = useState({
        size: "Milk",
        addOn1: "Mint",
        addOn2: "Toffee",
        number: 1,
    });
    const handleChange = (e) => {
        let tarName = e.target.name;
        let tarValue = e.target.value;
        setFormState({ ...formState, [tarName]: tarValue });
    };
    const handleNumberChange = (e) => {
        let tarValue = parseFloat(e);
        // console.log(tarValue);
        setFormState({ ...formState, number: tarValue });
    };

    const getPrice = () => prices * formState.number;

    const { addItem } = useContext(CartContext);
    const addToCart = (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(formState.size);
        let itemToAdd = {
            name: props.name,
            size: formState.size,
            number: formState.number,
            price: prices * formState.number,
            addOn: [`${formState.addOn1} and ${formState.addOn2}`],
            type: props.category,
        };

        addItem(itemToAdd);
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
                        defaultValue="Milk"
                        isInline
                        mb="0.5rem"
                        // mt="0.25rem"
                    >
                        <Radio variantColor="brandLight" value="Milk">
                            Milk
                        </Radio>
                        <Radio variantColor="brandLight" value="Semi Dark">
                            Semi Dark
                        </Radio>
                        <Radio variantColor="brandLight" value="Darker">
                            Darker
                        </Radio>
                    </RadioGroup>
                    <Text fontSize="14px">Flavour 21</Text>
                    <RadioGroup
                        onChange={handleChange}
                        name="addOn1"
                        defaultValue="Mint"
                        isInline
                        mb="0.5rem"
                        // mt="0.25rem"
                    >
                        {props.flavours.map((flavour, index) => {
                            return (
                                <Radio
                                    key={index}
                                    variantColor="brandLight"
                                    value={flavour}
                                >
                                    {flavour}
                                </Radio>
                            );
                        })}
                    </RadioGroup>
                    Flavour 2
                    <RadioGroup
                        onChange={handleChange}
                        name="addOn2"
                        defaultValue="Toffee"
                        isInline
                        mb="0.5rem"
                        // mt="0.25rem"
                    >
                        {props.flavours.map((flavour, index) => {
                            if (!(flavour === formState.addOn1)) {
                                return (
                                    <Radio
                                        key={index}
                                        variantColor="brandLight"
                                        value={flavour}
                                    >
                                        {flavour}
                                    </Radio>
                                );
                            } else {
                                return null;
                            }
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

export default Chocolate;
