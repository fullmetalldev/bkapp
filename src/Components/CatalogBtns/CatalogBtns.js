import React from 'react';

const CatalogBtns = () => {
    return (
        <div className="sectionCatalog__buttonsRow">
            <a href="#test" className="sectionCatalog__buttonsRow-transperentBtn">
                Скачать каталог
            </a>
            <button className="sectionCatalog__buttonsRow-greenBtn">
                Запросить прайс лист
            </button>
        </div>
    );
};

export default CatalogBtns;