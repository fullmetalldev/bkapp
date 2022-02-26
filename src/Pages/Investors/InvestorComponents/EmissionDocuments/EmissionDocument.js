import React from 'react';
import doc from "./docImg.png";

const EmissionDocument = () => {
    return (
        <div className="investors__pages">
            <div className="investors__pages_left">
                <span className="investors__pages-chapter">2-выпуск</span>

                <a className="investors__pages-documentCard">
                    <img src={doc} alt="pdf doc"/>
                    <span>Начисленные доходы по эмиссионным ценным бумагам эмитента
Скачать PDF</span>
                </a>
                <a className="investors__pages-documentCard">
                    <img src={doc} alt="pdf doc"/>
                    <span>Сведения, оказывающие, по мнению эмитента, существенное влияние на стоимость его эмиссионных ценных бумаг (досрочное погашение по усмотрению эмитента)
Скачать PDF</span>
                </a>
                <div className="investors__pages-documentCard">
                    <img src={doc} alt="pdf doc"/>
                    <span>Сведения, оказывающие, по мнению эмитента, существенное влияние на стоимость его эмиссионных ценных бумаг (дата начала размещения)
Скачать PDF</span>
                </div>

            </div>
            <div className="investors__pages_right">
                <span className="investors__pages-chapter">1-выпуск</span>

                <a className="investors__pages-documentCard">
                    <img src={doc} alt="pdf doc"/>
                    <span>Сообщение об установленном размере купонной ставки
Скачать PDF</span>
                </a>
                <a className="investors__pages-documentCard">
                    <img src={doc} alt="pdf doc"/>
                    <span>Сообщение о дате начала размещения ценных бумаг
Скачать PDF</span>
                </a>

            </div>
        </div>
    );
};

export default EmissionDocument;