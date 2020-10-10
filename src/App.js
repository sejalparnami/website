import React from "react";
// import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import PastryMenu from "./pages/PastryMenu";
import OurStory from "./pages/OurStory";
import ContactUs from "./pages/ContactUs";
import Workshops from "./pages/Workshops";
// import Cookie from "./components/Cookie";
import Navbar from "./components/Navbar";
import { Box, CSSReset, ThemeProvider } from "@chakra-ui/core";
import customTheme from "./customTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CartProvider } from "./contexts/cart.context";

// import "./App.css";

function App() {
    // const initialCart = [
    //     {
    //         id: 1,
    //         name: "Strawberry Cheesecake",
    //         size: "1kg",
    //         number: 3,
    //         priceOfOne: 100,

    //     },
    //     {
    //         id: 2,
    //         name: "Blueberry Cheesecake",
    //         size: "3kg",
    //         number: 1,
    //         priceOfOne: 400,

    //     },
    // ];
    // const [cart, setCart] = useState(initialCart);

    return (
        <div className="App">
            <Router>
                <ThemeProvider theme={customTheme}>
                    <CSSReset />
                    <CartProvider>
                        <Box bg="brandLight.100" minH="100vh">
                            <Navbar />

                            <Switch>
                                <Route path="/" exact>
                                    <PastryMenu />
                                </Route>
                                <Route path="/cart">
                                    <Cart />
                                </Route>
                                <Route path="/ourStory">
                                    <OurStory />
                                </Route>
                                <Route path="/workshops">
                                    <Workshops />
                                </Route>
                                <Route path="/contactUS">
                                    <ContactUs />
                                </Route>
                            </Switch>

                            {/* <Cookie
                        key={1}
                        name="Cookies"
                        image="https://picsum.photos/340/200"
                    /> */}
                        </Box>
                    </CartProvider>
                </ThemeProvider>
            </Router>
        </div>
    );
}

export default App;
