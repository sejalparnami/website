// import React, { useState, useContext } from 'react'

// import { CartContext } from "../contexts/cart.context";
// import { v4 as uuidv4 } from "uuid";

// import {
//     Box,
//     Button,
//     Flex,
//     Image,
//     Radio,
//     RadioGroup,
//     Checkbox,
//     CheckboxGroup,
//     Text,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     useDisclosure,
// } from "@chakra-ui/core";

// function Chocolate(props) {
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const prices = 200;
//     const [numChecked, setNumChecked] =useState(2);
//     const [formState, setFormState] = useState({
//         size: "Milk",
//         addOn: ["Mint", "Toffee"],
//     });
//     const handleRadioChange = (e) => {
//         let tarName = e.target.name;
//         // console.log(e);
//         let tarValue = e.target.value;
//         // console./log(tarValue);
//         // if (tarName === "addOn" && ((tarValue.length > 2) && ()){
//         //     return;
//         // }
//         // if (tarName === "addOn" && tarValue.length > 2){
//         //     return;
//         // }
//         setFormState({ ...formState, [tarName]: tarValue });
//     };

//     // const handleNumChange = () => {
//     //     let n = formState.addOn.length;
//     //     // console.log(n);
//     //     setNumChecked(n);
//     //     // console.log(numChecked);
//     // }

//     const handleCheckChange = (e) => {
//         // let tarName = e.target.name;
//         // console.log(numChecked);
//         console.log(e);
//         let tarValue = e;
//         // setNumChecked(0);
//         console.log(tarValue.length);
//         // let t = tarValue.length;
//         setNumChecked(tarValue.length);
//         // console.log(numChecked);
//         // console./log(tarValue);
//         // if (tarName === "addOn" && ((tarValue.length > 2) && ()){
//         //     return;
//         // }
//         // if (tarName === "addOn" && tarValue.length > 2){
//         //     return;
//         // }
//         console.log(tarValue);
//         console.log(tarValue.length);
//         setFormState({ size:formState.size  , addOn: tarValue });
//         console.log(formState.addOn)
//         // console.log(numChecked);
//         // setNumChecked(tarValue);
//         // handleNumChange(tarValue);
//         // console.log(e.length);
//         // console.log(numChecked);
//     };

//     const getPrice = () => prices;

//     const { cart, setCart } = useContext(CartContext);
//     const addToCart = (e) => {
//         if(!((numChecked===1)||(numChecked===2))){
//             onOpen();
//             return;
//         }

//         e.preventDefault();
//         // console.log(e);
//         setCart([
//             ...cart,
//             {
//                 id: uuidv4(),
//                 name: props.name,
//                 size: formState.size,
//                 number: 1,
//                 priceOfOne: prices,
//                 addOn: formState.addOn,
//             },
//         ]);
//     };
//     return (
//         <Flex
//             maxW="360px"
//             bg=" #b76658"
//             w="100%"
//             flexDirection="column"
//             rounded="10px"
//             // p="1rem"
//         >
//             <Image
//                 src={props.image}
//                 alt={props.name}
//                 objectFit="contain"
//                 roundedTop="10px"
//             />

//             <Box pr="1rem" pl="1rem" pb="1rem" color="white">
//                 <Flex justifyContent="space-between" align="center">
//                     <Text as="h2" fontSize="1.5rem">
//                         {props.name}
//                     </Text>
//                     <Text as="h3" fontSize="1.5rem">
//                         ₹{getPrice()}
//                     </Text>
//                 </Flex>
//                 <form onSubmit={addToCart}>
//                     <Text fontSize="14px">Size</Text>
//                     <RadioGroup
//                         onChange={handleRadioChange}
//                         name="size"
//                         defaultValue="Milk"
//                         isInline
//                         mb="0.5rem"
//                         // mt="0.25rem"
//                     >
//                         <Radio variantColor="brandLight" value="Milk">
//                             Milk
//                         </Radio>
//                         <Radio variantColor="brandLight" value="Semi Dark">
//                             Semi Dark
//                         </Radio>
//                         <Radio variantColor="brandLight" value="Darker">
//                             Darker
//                         </Radio>
//                     </RadioGroup>

//                     <Text fontSize="14px">Flavours</Text>
//                     <CheckboxGroup
//                         onChange={handleCheckChange}
//                         name="addOn"
//                         defaultValue={["Mint", "Toffee"]}
//                         isInline
//                         mb="0.5rem"
//                         // mt="0.25rem"
//                     >
//                     {props.flavours.map((flavour, index) => {
//                             return (
//                                     <Checkbox key={index} variantColor="brandLight" value={flavour} >
//                                         {flavour}
//                                     </Checkbox>

//                             );
//                         }
//                     )}

//                     </CheckboxGroup>
//                     <Button color="brandDark.400" type="submit">
//                         Add to Cart
//                     </Button>
//                 </form>
//             </Box>
//             <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent bg="brandLight.100" rounded="10px" w="300px">
//                     <ModalHeader>Invalid Selection</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>The Maximun Flavourings you can chose is 2</ModalBody>
//                     <ModalFooter>
//                         <Button
//                             variantColor="brandDark"
//                             onClick={onClose}
//                             rounded="10px"
//                             target="_blank"
//                         >
//                             Okay
//                         </Button>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </Flex>
//     )
// }

// export default Chocolate;

//isDisabled={!(((formState.addOn[0]===flavour)||(formState.addOn[1]===flavour))&&((numChecked===1)||(numChecked===2)))}

import React, { useState, useContext } from "react";

import { CartContext } from "../contexts/cart.context";

import {
    Box,
    Button,
    Flex,
    Image,
    Radio,
    RadioGroup,
    // Checkbox,
    // CheckboxGroup,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    // Modal,
    // ModalOverlay,
    // ModalContent,
    // ModalHeader,
    // ModalFooter,
    // ModalBody,
    // ModalCloseButton,
    // useDisclosure,
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
        console.log(formState.size);
        let itemToAdd = {
            name: props.name,
            size: formState.size,
            number: formState.number,
            price: prices * formState.number,
            addOn: [`${formState.addOn1} and ${formState.addOn2}`],
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
        //         priceOfOne: prices,
        //         addOn: [`${formState.addOn1} and ${formState.addOn2}`],
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
                                return <Text key={index}> </Text>;
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
