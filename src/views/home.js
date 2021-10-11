import React from "react";

import Header from "../components/Header";
import OurProfile from "../components/OurProfile";
import Footer from "../components/footer";
import Card from "../components/cards";
const Home =()=>{
    return (
        <div>
            <Header/>
            <OurProfile/>
            <Card/>
            <Footer/>
        </div>
    )
}

export default Home;