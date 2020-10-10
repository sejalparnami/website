import React, { useState, useEffect } from "react";

import { getData } from "../Contenful.js";

import Entremets from "../components/Entremets";
import Eclairs from "../components/Eclairs";
import Cookie from "../components/Cookie";
import TravelCake from "../components/TravelCake";
import TartAndPie from "../components/TartAndPie";
import Granola from "../components/Granola";
import Chocolate from "../components/Chocolate";
import IcecreamAndSorbet from "../components/IcecreamAndSorbet";

import {
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    SimpleGrid,
    Flex,
} from "@chakra-ui/core";

function PastryMenu() {
    const [data2, setData2] = useState([]);
    // const [iceCream. setIceCream] = useState([])

    useEffect(() => {
        const promise = getData();

        promise.then((data) => {
            // console.log(data);
            // console.log("hello");
            setData2(data);
            // setIceCream(data.map((item) => {}))
        });
    }, []);

    const [itemType, setItemType] = useState("Entremets");

    const changeType = (e) => {
        // e.preventDefault();s
        // console.log(e.target.value);
        setItemType(e.target.value);
    };
    return (
        <Flex direction="column" p="1rem" alignItems="center">
            <Text
                as="h2"
                color="brandDark.400"
                textAlign="center"
                fontSize="1.5rem"
            >
                MENU
            </Text>

            <Menu zIndex={500}>
                <MenuButton
                    as={Button}
                    rightIcon="chevron-down"
                    mt={"1rem"}
                    mb={"1rem"}
                    variantColor="brandDark"
                    color="white"
                    rounded="10px"
                    width="100%"
                    maxW="360px"
                >
                    {itemType}
                </MenuButton>
                <MenuList>
                    <MenuItem value="Entremets" onClick={changeType}>
                        Entremets
                    </MenuItem>
                    <MenuItem value="Cheesecakes" onClick={changeType}>
                        Cheesecakes
                    </MenuItem>
                    <MenuItem
                        value="Eclairs and Profiteroles"
                        onClick={changeType}
                    >
                        Eclairs and Profiteroles
                    </MenuItem>
                    <MenuItem value="Travel Cakes" onClick={changeType}>
                        Travel Cakes
                    </MenuItem>
                    <MenuItem value="Cookies" onClick={changeType}>
                        Cookies
                    </MenuItem>
                    <MenuItem value="Brownies" onClick={changeType}>
                        Brownies
                    </MenuItem>
                    <MenuItem value="Tarts and Pies" onClick={changeType}>
                        Tarts and Pies
                    </MenuItem>
                    <MenuItem value="Granola" onClick={changeType}>
                        Granola
                    </MenuItem>
                    <MenuItem value="Chocolates" onClick={changeType}>
                        Chocolates
                    </MenuItem>
                    <MenuItem
                        value="Icecreams and Sorbets"
                        onClick={changeType}
                    >
                        Icecreams and Sorbets
                    </MenuItem>
                </MenuList>
            </Menu>
            <SimpleGrid
                columns={{ xs: 1, lg: 4 }}
                spacing="1rem"
                width="auto"
                justifyItems="center"
                justifyContent="space-between"
            >
                {data2.map((item) => {
                    if (
                        item.sys.contentType.sys.id === "entremets" &&
                        itemType === "Entremets"
                    ) {
                        return (
                            <Entremets
                                key={item.sys.id}
                                name={item.fields.name}
                                price={item.fields.price}
                                prices={item.fields.prices}
                                description={item.fields.desc}
                                image={item.fields.picture.fields.file.url}
                                category="Entremet"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "cheesecakes" &&
                        itemType === "Cheesecakes"
                    ) {
                        return (
                            <Entremets
                                key={item.sys.id}
                                name={item.fields.name}
                                price={item.fields.price}
                                prices={item.fields.prices}
                                description={item.fields.desc}
                                image={item.fields.picture.fields.file.url}
                                category="Cheesecake"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id ===
                            "eclairsAndProfiteroles" &&
                        itemType === "Eclairs and Profiteroles"
                    ) {
                        return (
                            <Eclairs
                                key={item.sys.id}
                                name={item.fields.name}
                                addOns={item.fields.addOns}
                                image={item.fields.picture.fields.file.url}
                                category="Eclair and Profiteroles"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "cookies" &&
                        itemType === "Cookies"
                    ) {
                        return (
                            <Cookie
                                key={item.sys.id}
                                name={item.fields.name}
                                image={item.fields.picture.fields.file.url}
                                category="Cookies"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "travelCakes" &&
                        itemType === "Travel Cakes"
                    ) {
                        return (
                            <TravelCake
                                key={item.sys.id}
                                name={item.fields.name}
                                image={item.fields.picture.fields.file.url}
                                price={item.fields.price}
                                category="Travel Cake"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "brownies" &&
                        itemType === "Brownies"
                    ) {
                        return (
                            <TravelCake
                                key={item.sys.id}
                                name={item.fields.name}
                                image={item.fields.picture.fields.file.url}
                                price={item.fields.price}
                                category="Brownies"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "tartsAndPies" &&
                        itemType === "Tarts and Pies"
                    ) {
                        return (
                            <TartAndPie
                                key={item.sys.id}
                                name={item.fields.name}
                                description={item.fields.desc}
                                image={item.fields.picture.fields.file.url}
                                prices={item.fields.prices}
                                category="Tarts and Pies"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "granola" &&
                        itemType === "Granola"
                    ) {
                        return (
                            <Granola
                                key={item.sys.id}
                                name={item.fields.name}
                                description={item.fields.desc}
                                image={item.fields.picture.fields.file.url}
                                prices={item.fields.prices}
                                category="Granola"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "chocolate" &&
                        itemType === "Chocolates"
                    ) {
                        return (
                            <Chocolate
                                key={item.sys.id}
                                name={item.fields.name}
                                image={item.fields.picture.fields.file.url}
                                flavours={item.fields.flavours}
                                category="Chocolate"
                            />
                        );
                    } else if (
                        item.sys.contentType.sys.id === "iceCreams" &&
                        itemType === "Icecreams and Sorbets"
                    ) {
                        return (
                            <IcecreamAndSorbet
                                key={item.sys.id}
                                name={item.fields.name}
                                image={item.fields.picture.fields.file.url}
                                flavours={item.fields.flavours}
                                seasonal={item.fields.seasonal}
                                category="Ice Creams and Sorbets"
                            />
                        );
                    } else return null;
                })}
            </SimpleGrid>
        </Flex>
    );
}

export default PastryMenu;
