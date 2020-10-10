import React, { Component } from "react";
import Carousel from "../components/Navbar.js";

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Navbar />
                <Carousel />
            </div>
        );
    }
}

export default Homepage;
