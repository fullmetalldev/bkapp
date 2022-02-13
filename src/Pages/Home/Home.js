import React from 'react';
import './home.scss'
import FirstScreen from "./FirstScreen";
import About from "./About";
import Work from "./Work";
import Sale from "./Sale";
import Catalog from "./Catalog";
import News from "./News";
import Project from "./Project";
import Text from "./Text";

const Home = () => {
    return (
        <main>
            <FirstScreen/>
            <About/>
            <Work/>
            <Sale/>
            <Catalog/>
            <News/>
            <Project/>
            <Text/>
        </main>
    );
};

export default Home;