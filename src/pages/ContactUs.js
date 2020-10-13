import React from "react";

import { Flex, Text } from "@chakra-ui/core";

function ContactUs() {
    const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
    return (
        <Flex p="1rem" align="center" direction="column">
            <Text
                as="h2"
                color="brandDark.400"
                textAlign="center"
                fontSize="1.5rem"
                mb="1rem"
            >
                CONTACT US
            </Text>
            <Text
                as="p"
                color="brandDark.400"
                textAlign="center"
                fontSize="1rem"
            >
                Email:{" "}
                <Text
                    as="a"
                    href="mailto:   sejalparnami@gmail.com"
                    target="_blank"
                    color="brandDark.400"
                    textAlign="center"
                    fontSize="1rem"
                    textDecoration="underline"
                >
                    sejalparnami@gmail.com
                </Text>
            </Text>
            <Text
                as="p"
                color="brandDark.400"
                textAlign="center"
                fontSize="1rem"
            >
                Whatsapp:{" "}
                <Text
                    as="a"
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    color="brandDark.400"
                    textAlign="center"
                    fontSize="1rem"
                    textDecoration="underline"
                >
                    {phoneNumber}
                </Text>
            </Text>
            <Text
                as="p"
                color="brandDark.400"
                textAlign="center"
                fontSize="1rem"
            >
                Instagram:{" "}
                <Text
                    as="a"
                    href="https://www.instagram.com/sejalparnami/"
                    target="_blank"
                    color="brandDark.400"
                    textAlign="center"
                    fontSize="1rem"
                    textDecoration="underline"
                >
                    @sejalparnami
                </Text>
            </Text>
        </Flex>
    );
}

export default ContactUs;
