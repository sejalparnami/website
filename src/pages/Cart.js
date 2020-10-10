import {
    Button,
    Flex,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/core";
import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../contexts/cart.context";

function Cart() {
    const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
    // console.log(phoneNumber);
    const { isOpen, onOpen, onClose } = useDisclosure();
    // console.log(useContext(CartContext));
    const { cart } = useContext(CartContext);
    let total = 0;
    const getTotal = () => {
        let sum = 0;
        cart.forEach((item) => (sum += item.priceOfOne * item.number));
        return sum;
    };
    total = getTotal();
    let sendCart = [];
    sendCart = cart.map((item) => {
        let text = `Name: ${item.name} 
        Category: ${item.type}
        Price of one item: ${item.priceOfOne}
        Number of item: ${item.number}
        Add ons: ${item.addOn}`;
        return text;
    });
    // console.log(`${encodeURIComponent(JSON.stringify(cart))}`);
    // let message = `${encodeURIComponent(
    //     JSON.stringify(cart)
    // )}   Total:${total}`;
    // let message = `${encodeURIComponent(
    //     JSON.stringify(cart)
    // )}   Total:${total}`;
    // totalMessage
    // let finalMessage = sendCart.join("\n") + "\n" + "Total: " + total;
    let message = `${encodeURIComponent(
        sendCart.join("\n")
    )}                     
              \nTotal:${total}`;
    return (
        <Flex
            direction="column"
            bg="brandLight.100"
            h="100%"
            p="1rem"
            width="100%"
            alignItems="center"
        >
            {cart.map((cartItem, index) => (
                <CartItem
                    key={index}
                    id={cartItem.id}
                    name={cartItem.name}
                    priceOfOne={cartItem.priceOfOne}
                    addOn={cartItem.addOn}
                    size={cartItem.size}
                    number={cartItem.number}
                    type={cartItem.type}
                />
            ))}

            <Text as="h2">Total: {total}</Text>

            <Button
                leftIcon="whatsapp"
                mt="1rem"
                w="100%"
                maxW="360px"
                variantColor="brandDark"
                color="white"
                rounded="10px"
                onClick={onOpen}
            >
                Checkout
            </Button>
            <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg="brandLight.100" rounded="10px" w="300px">
                    <ModalHeader>Confirm?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Do you want to checkout? <br /> Please note that there
                        is no fixed shape and style for any flavour of the
                        entremet. It may vary depending upon availability
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variantColor="brandDark"
                            onClick={onClose}
                            rounded="10px"
                            as="a"
                            target="_blank"
                            href={`https://wa.me/${phoneNumber}?text=${message}`}
                        >
                            Yes Checkout
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
}

export default Cart;
