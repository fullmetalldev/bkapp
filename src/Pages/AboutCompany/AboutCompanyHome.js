import React from 'react';
import AboutImg from './img/aboutImg.png';

const AboutCompanyHome = () => {
    return (
        <section className="aboutCompanyHome">
            <div className="container">
                <p className="section__navi"><a className="navLinktitle" href="/">Главная</a> / О компании</p>
                <h1 className="section__title">О КОМПАНИИ</h1>
                <div className="aboutCompanyHome__row">
                    <div className="aboutCompanyHome__card">
                        <h2 className="aboutCompanyHome__card_title">Компания БК</h2>
                        <p className="aboutCompanyHome__card_subtitle">Известное, стабильно развивающееся на протяжении
                            почти 20 лет производственное предприятие.</p>
                        <p className="aboutCompanyHome__card_subtitle aboutCompanyHome__card_subtitle-margin">Специализируется на разработке, выпуске и
                            реализации
                            изделий из пластика для строительного и пищевого направлений промышленности:</p>
                        <p className="aboutCompanyHome__card_descr">Производство продукции из пластмассы для оконной и
                            строительной промышленности на собственных пресс-формах.</p>
                        <p className="aboutCompanyHome__card_descr aboutCompanyHome__card_descr-margin">Производство пищевой упаковки из пластмассы
                            (соусницы,
                            супницы, плошки, столовые приборы) на собственных пресс-формах</p>
                        <p className="aboutCompanyHome__card_descr">Производство продукции из пластмассы на заказ на
                            пресс-формах заказчиков.</p>
                    </div>
                    <div className="aboutCompanyHome__img">
                        <img src={AboutImg} alt="AboutImg"/>
                    </div>
                </div>
                <div className="aboutCompanyHome__item">
                    <p className="aboutCompanyHome__item_subtitle">Основные производственные линии компании представлены
                        термопластавтоматами различного объема переработки. Производимая пластиковая тара используется для фасовки рыбы, мяса, солений, варений, готовых блюд и
                        др.Комплектующие для окон ПВХ и стеклопакетов имеют стабильно высокий спрос и большое количество
                        заказчиков на территории нашей страны.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutCompanyHome;