import "./style.scss";
import React, {useState} from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import History from "./Components/History/History";
import Home from "./Components/Home/Home";
import Scroll from "./Components/Scroll/Scroll";

function App() {

    const [language, setLanguage] = useState('ru');

    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage}/>
            <Scroll/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/history" element={<History/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
