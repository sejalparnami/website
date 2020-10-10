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

function App() {
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
                        </Box>
                    </CartProvider>
                </ThemeProvider>
            </Router>
        </div>
    );
}

export default App;
