import React from 'react';
import "./CatalogBtns.css"

const CatalogBtns = () => {
    return (
        <div className="buttonsRow">
            <a href="#test" className="buttonsRow-transperentBtn">
                Скачать каталог
            </a>
            <button className="buttonsRow-greenBtn">
                Запросить прайс лист
            </button>
        </div>
    );
};

export default CatalogBtns;