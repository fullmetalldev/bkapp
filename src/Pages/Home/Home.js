import React from 'react';
import './home.scss'
import FirstScreen from "./FirstScreen";
import About from "./About";
import Work from "./Work";
import Sale from "./Sale";
import Catalog from "./Catalog";
import News from "./News";
import Text from "./Text";
import OrderForm from "../../Components/OrderForm/OrderForm";

const Home = () => {
    return (
        <main className="homeMain">
            <FirstScreen/>
            <About/>
            <Work/>
            <Sale/>
            <Catalog/>
            <News/>
            <OrderForm/>
            <Text/>
        </main>
    );
};

export default Home;