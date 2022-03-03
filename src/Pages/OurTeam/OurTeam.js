import React from 'react';
import "./OurTeam.css";
import "./OurTeamAdaptive.css";
import card1 from "./cards/card1.png"
import card2 from "./cards/card2.png"
import card3 from "./cards/card3.png"
import card4 from "./cards/card4.png"
import card5 from "./cards/card5.png"
import card6 from "./cards/card6.png"


const OurTeam = () => {
    return (
        <main className="ourTeam">

            <div className="container">

                <div className="ourTeam__row">

                    <h4 className="ourTeam__route">
                        <a className="navLinktitle" href="/">Главная</a> / Наша команда
                    </h4>

                    <h2 className="section__title">Наша команда</h2>

                    <div className="ourTeam__cardsRow">

                        <div className="ourTeam__cardsRow_card">
                            <img src={card1} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card2} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card3} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card4} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card5} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card6} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card1} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card2} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>

                        <div className="ourTeam__cardsRow_card">
                            <img src={card3} alt="team1"/>
                            <div className="ourTeam__cardsRow_card-info">
                                <h2 className="ourTeam__cardsRow_card-name">Иванов Иван Иванович</h2>
                                <div className="ourTeam__cardsRow_card-line"></div>
                                <span className="ourTeam__cardsRow_card-about">Директор компании<br/>
Работает с 2012 года</span>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </main>
    );
};

export default OurTeam;