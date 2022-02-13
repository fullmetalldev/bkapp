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

function App() {

    const [language, setLanguage] = useState('ru');

    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage}/>
            <Scroll/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/catalog/accessories" element={<CatalogSection/>}/>
                <Route path="/mission" element={<Mission/>}/>
                <Route path="/benefits" element={<Benefits/>}/>
                <Route path="/polypropylene" element={<Polypropylene/>}/>
                <Route path="/about" element={<AboutCompany/>}/>
                <Route path="/catalog" element={<CatalogSection/>}/>
                <Route path="/catalog/tableware" element={<PlasticTableware/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
