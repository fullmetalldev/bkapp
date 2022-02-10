import "./styles.css";
import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import History from "./Components/History/History";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/history" element={<History/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
