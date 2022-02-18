import "./style.scss";
import React, {useState} from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import History from "./Pages/History/History";
import Home from "./Pages/Home/Home";
import Scroll from "./Components/Scroll/Scroll";
import CatalogSection from "./Pages/Catalog/CatalogSection";
import Benefits from "./Pages/Benefits/Benefits";
import Mission from "./Pages/Mission/Mission";
import Polypropylene from "./Pages/Polypropylene/Polypropylene";
import AboutCompany from "./Pages/AboutCompany/AboutCompany";
import PlasticTableware from "./Pages/PlasticTableware/PlasticTableware";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import CartScreen from "./Pages/CartScreen/CartScreen";
import PlasticTablewareProduct from "./Pages/PlasticTablewareProduct/PlasticTablewareProduct";
import Investors from "./Pages/Investors/Investors";
import Contacts from "./Pages/Contacts/Contacts";
import DeliveryAndPay from "./Pages/DeliveryAndPay/DeliveryAndPay";
import ContractProduction from "./Pages/ContractProduction/ContractProduction";

function App() {

    const [language, setLanguage] = useState('ru');
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [cartScreen, setCartScreen] = useState(false);

    return (
        <div className="App">
            <Header cartScreen={cartScreen} setCartScreen={setCartScreen} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} language={language} setLanguage={setLanguage}/>
            {burgerMenu ? <BurgerMenu/> : ""}
            {cartScreen ? <CartScreen setCartScreen={setCartScreen}/> : ""}
            <Scroll/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/catalog/accessories" element={<CatalogSection/>}/>
                <Route path="/mission" element={<Mission/>}/>
                <Route path="/benefits" element={<Benefits/>}/>
                <Route path="/polypropylene" element={<Polypropylene/>}/>
                <Route path="/about" element={<AboutCompany/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/delivery" element={<DeliveryAndPay/>}/>
                <Route path="/investors" element={<Investors/>}/>
                <Route path="/production" element={<ContractProduction/>}/>
                <Route path="/catalog/tableware" element={<PlasticTableware/>}/>
                <Route path="/catalog/tableware/product" element={<PlasticTablewareProduct/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
