import React from 'react';
import News1 from './imgs/news1.png';
import News2 from './imgs/news2.png';
import ArrowBot from './imgs/arrowbot.png';

const News = () => {
    return (
        <section className="news">
            <h2 className="news__title section__title">Новости</h2>
            <div className="news__list">
                <div className="container">
                    <div className="news__card">
                        <img src={News1} alt="News1"/>
                        <div className="news__card_item">
                            <h3 className="news__card_title">Новинки среди нас!</h3>
                            <p className="news__card_subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в
                                печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с
                                начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров
                                и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
                                успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                                Его популяризации в новое время послужили публикация листов Letraset с образцами</p>
                            <p className="news__card_more">Читать подробнее</p>
                        </div>
                    </div>
                    <div className="news__card margin">
                        <img src={News2} alt="News2"/>
                        <div className="news__card_item">
                            <h3 className="news__card_title">Новинки среди нас!</h3>
                            <p className="news__card_subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в
                                печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с
                                начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров
                                и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
                                успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                                Его популяризации в новое время послужили публикация листов Letraset с образцами</p>
                            <p className="news__card_more">Читать подробнее</p>
                        </div>
                    </div>
                    <div className="news__more">
                        <p>Смотреть все новости</p>
                        <img src={ArrowBot} alt="ArrowBot"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;