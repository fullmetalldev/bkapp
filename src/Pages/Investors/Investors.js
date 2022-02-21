import React, {useState} from 'react';
import "./investors.css";
import Obligation from "./InvestorComponents/Obligation/Obligation";
import EmissionDocument from "./InvestorComponents/EmissionDocuments/EmissionDocument";
import "./investorsAdaptive.css"

const Investors = () => {

    const [page, setPage] = useState('obligation');

    return (
        <main className="investors">

            <div className="container">

                <div className="investors__row">
                    <h4 className="investors__route">Главная / О нас / Инвесторам</h4>
                    <h2 className="section__title">ООО «БК»</h2>
                    <span className="investors__info">
                        Новосибирская компания. С 2011 г. занимается производством изделий из пластмасс для строительной (детали для стеклопакетов) и пищевой (супницы, соусницы) промышленности на собственных пресс-формах. За 9 месяцев 2019 г. компания изготовила более 58,5 млн ед. продукции.
                    </span>
                    <button className="investors__btn">
                        Смотреть презентацию
                    </button>
                    <div className="investors__hrefs">
                        <h3 onClick={()=> setPage('obligation')} className={`investors__hrefs-href ${page === "obligation" ? "activeHref" : ""}`}>Облигации</h3>
                        <h3 className="investors__hrefs-href">Общие сведения</h3>
                        <h3 className="investors__hrefs-href">Регистрационные документы</h3>
                        <h3 onClick={()=> setPage("documentsEmission")} className={`investors__hrefs-href ${page === "documentsEmission" ? "activeHref" : ""}`}>Эмиссионные документы</h3>
                        <h3 className="investors__hrefs-href">Сообщения</h3>
                    </div>

                    {page === "obligation" ? <Obligation/> : ""}
                    {page === "documentsEmission" ? <EmissionDocument/> : ""}

                </div>

            </div>

        </main>
    );
};

export default Investors;