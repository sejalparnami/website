import { Button, Flex, Text, Tag, TagLabel } from "@chakra-ui/core";

import { CartContext } from "../contexts/cart.context";
import React, { useContext } from "react";

function CartItem(props) {
    // console.log(props);

    const remove = () => {
        removeItem(props.id);
    };

    const { removeItem } = useContext(CartContext);
    return (
        <Flex
            bg="brandDark.100"
            mt="0.5rem"
            mb="0.5rem"
            rounded="10px"
            p="1rem"
            color="white"
            direction="column"
            width={{ xs: "100%", sm: "360px" }}
        >
            <Tag
                size="xs"
                pl="0.5rem"
                pr="0.5rem"
                // width="auto"
                // key={size}
                // rounded="full"
                variant="subtle"
                variantColor="brandLight"
            >
                {/* {console.log(props)} */}
                <TagLabel color="brandDark.400">{props.type}</TagLabel>
            </Tag>
            <Flex direction="row" justifyContent="space-between">
                <Text fontSize="16px">{props.name}</Text>
                <Text fontSize="16px">x{props.number}</Text>
            </Flex>
            <Flex direction="row" justifyContent="space-between">
                {props.size === "None" ? (
                    <Text fontSize="12px"> </Text>
                ) : (
                    <Text fontSize="16px">{props.size}</Text>
                )}
                <Text fontSize="16px">₹{props.priceOfOne}</Text>
            </Flex>
            {props.addOn === "None" ? (
                <Text fontSize="12px"> </Text>
            ) : (
                <Text fontSize="12px">{props.addOn}</Text>
            )}
            <Button
                mt="1rem"
                w="auto"
                size="xs"
                variant="link"
                variantColor="brandLight"
                color="white"
                rounded="10px"
                onClick={remove}
            >
                <Text as="u"> Remove from Cart</Text>
            </Button>
        </Flex>
    );
}

export default CartItem;
