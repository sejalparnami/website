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

function MenuItem(props) {
    const [formState, setFormState] = useState({
        size: "Individual",
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
        // console.log("On CHange Radio");
        // let tarName = e.target.name;
        let tarValue = e;
        // console.log(tarName);
        // console.log(tarValue);
        // console.log(e);
        setFormState({ ...formState, number: tarValue });
    };

    const getPrice = () => {
        let totPrice = 0.0;
        switch (formState.size) {
            case "Individual": {
                totPrice = parseFloat(props.prices[0]);
                break;
            }
            case "700g": {
                totPrice = parseFloat(props.prices[1]);
                break;
            }
            case "1kg": {
                totPrice = parseFloat(props.prices[2]);
                break;
            }
            case "1.5kg": {
                totPrice = parseFloat(props.prices[3]);
                break;
            }
            default: {
                totPrice = 0;
                break;
            }
        }
        totPrice *= formState.number;
        return totPrice;
    };

    const { addItem } = useContext(CartContext);
    const addToCart = (e) => {
        e.preventDefault();
        // console.log(e);
        let price = 0;
        // console.log(props.prices);
        // console.log(parseFloat(props.prices[0]));
        // console.log(e.target.value + "target value");
        const getPrice = () => {
            let totPrice = 0.0;
            switch (formState.size) {
                case "Individual": {
                    totPrice = parseFloat(props.prices[0]);
                    break;
                }
                case "700g": {
                    totPrice = parseFloat(props.prices[1]);
                    break;
                }
                case "1kg": {
                    totPrice = parseFloat(props.prices[2]);
                    break;
                }
                case "1.5kg": {
                    totPrice = parseFloat(props.prices[3]);
                    break;
                }
                default: {
                    totPrice = 0;
                    break;
                }
            }
            totPrice *= formState.number;
            return totPrice;
        };

        price = parseFloat(getPrice());
        // console.log(price);

        let itemToAdd = {
            name: props.name,
            size: formState.size,
            number: formState.number,
            price: price,
            addOn: "None",
            type: props.category,
        };

        addItem(itemToAdd);
    };
    return (
        <Flex
            width="360px"
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
                <Box>
                    <Text as="p" fontSize="14px">
                        {props.description}
                    </Text>
                </Box>
                <form onSubmit={addToCart}>
                    <RadioGroup
                        onChange={handleChange}
                        name="size"
                        defaultValue="Individual"
                        isInline
                        mb="0.5rem"
                        mt="0.25rem"
                    >
                        <Radio variantColor="brandLight" value="Individual">
                            Individual
                        </Radio>
                        <Radio variantColor="brandLight" value="700g">
                            700g
                        </Radio>
                        <Radio variantColor="brandLight" value="1kg">
                            1kg
                        </Radio>
                        <Radio variantColor="brandLight" value="1.5kg">
                            1.5kg
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

export default MenuItem;
