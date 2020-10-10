import React from "react";

import { Flex, Text, Image } from "@chakra-ui/core";

function OurStory() {
    return (
        <Flex p="1rem" align="center" direction="column">
            <Text
                as="h2"
                color="brandDark.400"
                textAlign="center"
                fontSize="1.5rem"
                mb="1rem"
            >
                OUR STORY
            </Text>
            <Image
                src="https://picsum.photos/500/500"
                alt="Sejal Parnami"
            ></Image>
            <Text
                maxW="500px"
                color="brandDark.400"
                fontSize="16px"
                mt="0.5rem"
            >
                Hi, I am Sejal Parnami (fondly known as Chef Diablo), here
                trying to make Happiness Edible. We are a mix between a Cloud
                and an Artisanal Patisserie started in May 2020, specialising in
                French Pastry and Confectionery. We curate an exquisite dessert
                experience, all handmade with love and care and often
                customised. We believe that our food is an emotion, and unless
                there isn't the sense of intimacy and care, it would not be
                worth it. Our menu caters to everyone in Jaipur, and also offers
                a select variety for deliveries all across India!
            </Text>
        </Flex>
    );
}

export default OurStory;
