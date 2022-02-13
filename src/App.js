import "./style.scss";
import React, {useState} from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import History from "./Components/History/History";
import Home from "./Components/Home/Home";
import Scroll from "./Components/Scroll/Scroll";
<<<<<<< HEAD
import CatalogSection from "./Components/Catalog/CatalogSection";
=======
import Benefits from "./Components/Benefits/Benefits";
>>>>>>> 0cc5668f69e328a1a5a3bca59d9371607352a53c

function App() {

    const [language, setLanguage] = useState('ru');

    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage}/>
            <Scroll/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/history" element={<History/>}/>
<<<<<<< HEAD
                <Route path="/catalog" element={<CatalogSection/>}/>
=======
                <Route path="/benefits" element={<Benefits/>}/>
>>>>>>> 0cc5668f69e328a1a5a3bca59d9371607352a53c
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
