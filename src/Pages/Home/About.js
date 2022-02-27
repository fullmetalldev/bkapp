import React from 'react';
import AboutImg from './imgs/aboutimg.png';
import Leaves from './imgs/leaves.svg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__box">
                    <img className="about__leaves" src={Leaves} alt="Leaves"/>
                    <div className="about__content">
                        <h2 className="about__title">Завод по производству пластиковых изделий БК
                        </h2>
                        <p className="about__subtitle">Компания БК – известное, стабильно развивающееся на протяжении
                            почти 20 лет производственное предприятие. <br/>
                            Специализируется на разработке, выпуске и реализации изделий из пластика для строительного и
                            пищевого направлений промышленности: <br/>
                            • Производство продукции из пластмассы для оконной и строительной промышленности на собственных
                            пресс-формах. <br/>
                            • Производство пищевой упаковки из пластмассы (соусницы, супницы, плошки, столовые приборы) на
                            собственных пресс-формах. <br/>
                            • Производство продукции из пластмассы на заказ на пресс-формах заказчиков.
                        </p>
                        <a className="about__more">Читать подробнее</a>
                    </div>
                    <img className="about__img" src={AboutImg} alt="AboutImg"/>
                </div>
            </div>
        </section>
    );
};

export default About;