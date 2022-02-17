import React from 'react';
import './plasticTablewareProduct.css';
import RightImg from './img/rightImg.png';
import ProductImg from './img/containerImg.png';
import OrderForm from "../../Components/OrderForm/OrderForm";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Item1 from './img/item1.png';
import "@fancyapps/ui/dist/fancybox.css";
import {Fancybox} from "@fancyapps/ui";

const PlasticTablewareProduct = () => {
    return (
        <>
            <section className="tablewareProduct">
                <div className="container">
                    <h1 className="section__title">Контейнер “Плошка”, 360мл</h1>
                    <p className="tablewareProduct__subtitle">Используем современные безопасные материалы и добавки,
                        высокотехнологичное оборудование для создания уникальных свойств изделий.
                    </p>
                    <div className="tablewareProduct__category">
                        <p className="tablewareProduct__category_item">Для супа</p>
                        <p className="tablewareProduct__category_item">Для пикника</p>
                        <p className="tablewareProduct__category_item">Жёлтая</p>
                        <p className="tablewareProduct__category_item">Пластиковый контейнер</p>
                    </div>
                    <div className="tablewareProduct__row">
                        <div className="tablewareProduct__sort">
                            <h3 className="tablewareProduct__sort_title">Каталог посуды</h3>
                            <ul>
                                <li className="tablewareProduct__sort_item active">
                                    <p className="tablewareProduct__sort_item-name">Пластиковые контейнеры</p>
                                    <img src={RightImg} alt="RightImg"/>
                                </li>
                                <li className="tablewareProduct__sort_item">
                                    <p className="tablewareProduct__sort_item-name">Столовые приборы</p>
                                    <img src={RightImg} alt="RightImg"/>
                                </li>
                                <li className="tablewareProduct__sort_item">
                                    <p className="tablewareProduct__sort_item-name">Соусник одноразовый</p>
                                    <img src={RightImg} alt="RightImg"/>
                                </li>
                                <li className="tablewareProduct__sort_item">
                                    <p className="tablewareProduct__sort_item-name">Укупорка</p>
                                    <img src={RightImg} alt="RightImg"/>
                                </li>
                            </ul>
                            <button className="tablewareProduct__sort_btn">Получить прайс-лист</button>
                            <p className="tablewareProduct__sort_download">Скачать каталог</p>
                        </div>
                        <div className="tablewareProduct__gallery">
                            <div className="tablewareProduct__gallery_main">
                                <a
                                    data-fancybox="gallery"
                                    data-src="https://lipsum.app/id/2/1024x768"
                                >
                                    <img src={ProductImg}/>
                                </a>
                            </div>
                            <div className="tablewareProduct__gallery_row">
                                <div className="tablewareProduct__gallery_card">
                                    <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                        <img src="https://lipsum.app/id/3/200x150"/>
                                    </a>
                                </div>
                                <div className="tablewareProduct__gallery_card">
                                    <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                        <img src="https://lipsum.app/id/3/200x150"/>
                                    </a>
                                </div>
                                <div className="tablewareProduct__gallery_card">
                                    <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                        <img src="https://lipsum.app/id/3/200x150"/>
                                    </a>
                                </div>
                                <div className="tablewareProduct__gallery_card">
                                    <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
                                        <img src="https://lipsum.app/id/3/200x150"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="tablewareProduct__descr_btn" type="button">Заказать товар</button>
                            <div className="tablewareProduct__descr">
                                <ul className="tablewareProduct__descr_name">
                                    <li>Объем</li>
                                    <li>Диаметр</li>
                                    <li>Материал</li>
                                    <li>Цвет</li>
                                    <li>Ед. изм.</li>
                                    <li>Норма упаковки</li>
                                    <li>Вес 1й коробки, кг</li>
                                    <li>Объем 1й коробки, м3</li>
                                </ul>
                                <ul className="tablewareProduct__descr_stats">
                                    <li>360 мл</li>
                                    <li>112 мм</li>
                                    <li>Полипропилен</li>
                                    <li>Прозрачный</li>
                                    <li>шт.</li>
                                    <li>500/25</li>
                                    <li>8,0</li>
                                    <li>0,096</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tablewareProduct__list">
                        <div className="tablewareProduct__list_item">
                            <div className="box">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M56.129 60H3.87097C1.74879 59.9983 0.00176959 58.2512 0 56.1291V20.3226C0 19.7912 0.436347 19.3549 0.967742 19.3549H59.0323C59.5637 19.3549 60 19.7912 60 20.3226V56.1291C59.9983 58.2512 58.2512 59.9982 56.129 60ZM1.93548 21.2903V56.1291C1.93635 57.1905 2.80947 58.0637 3.87097 58.0645H56.129C57.1905 58.0637 58.0636 57.1905 58.0645 56.1291V21.2903H1.93548Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M59.0323 21.2903H0.967742C0.436347 21.2903 0 20.854 0 20.3226V10.6451C0.00172811 8.52296 1.74879 6.77594 3.87097 6.77417H11.6129C12.1443 6.77417 12.5806 7.21052 12.5806 7.74191C12.5806 8.27331 12.1443 8.70965 11.6129 8.70965H3.87097C2.80947 8.71052 1.93637 9.58364 1.93548 10.6451V19.3548H58.0645V10.6451C58.0637 9.58364 57.1905 8.71054 56.129 8.70965H48.3871C47.8557 8.70965 47.4194 8.27331 47.4194 7.74191C47.4194 7.21052 47.8557 6.77417 48.3871 6.77417H56.129C58.2512 6.7759 59.9982 8.52296 60 10.6451V20.3226C60 20.854 59.5637 21.2903 59.0323 21.2903Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M42.5807 8.70965H17.4194C16.888 8.70965 16.4517 8.27331 16.4517 7.74191C16.4517 7.21052 16.888 6.77417 17.4194 6.77417H42.5807C43.1121 6.77417 43.5484 7.21052 43.5484 7.74191C43.5484 8.27331 43.1121 8.70965 42.5807 8.70965Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M14.5162 15.4839C12.3941 15.4821 10.647 13.7351 10.6453 11.6129V3.87097C10.6453 1.74758 12.3928 0 14.5162 0C16.6396 0 18.3872 1.74758 18.3872 3.87097V11.6129C18.3855 13.7351 16.6384 15.4821 14.5162 15.4839ZM14.5162 1.93548C13.4547 1.93635 12.5816 2.80947 12.5807 3.87097V11.6129C12.5807 12.6744 13.4547 13.5484 14.5162 13.5484C15.5777 13.5484 16.4517 12.6744 16.4517 11.6129V3.87097C16.4509 2.80947 15.5777 1.93637 14.5162 1.93548Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M45.4839 15.4839C43.3617 15.4821 41.6147 13.7351 41.6129 11.6129V3.87097C41.6129 1.74758 43.3605 0 45.4839 0C47.6073 0 49.3548 1.74758 49.3548 3.87097V11.6129C49.3531 13.7351 47.6061 15.4821 45.4839 15.4839ZM45.4839 1.93548C44.4224 1.93635 43.5493 2.80947 43.5484 3.87097V11.6129C43.5484 12.6744 44.4224 13.5484 45.4839 13.5484C46.5454 13.5484 47.4194 12.6744 47.4194 11.6129V3.87097C47.4185 2.80947 46.5454 1.93637 45.4839 1.93548Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M33.8709 36.7742H26.129C25.5976 36.7742 25.1613 36.3379 25.1613 35.8065V28.0645C25.1613 27.5331 25.5976 27.0968 26.129 27.0968H33.8709C34.4023 27.0968 34.8387 27.5331 34.8387 28.0645V35.8065C34.8387 36.3379 34.4023 36.7742 33.8709 36.7742ZM27.0967 34.8387H32.9032V29.0323H27.0967V34.8387Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M33.8709 52.2581H26.129C25.5976 52.2581 25.1613 51.8218 25.1613 51.2904V43.5484C25.1613 43.017 25.5976 42.5807 26.129 42.5807H33.8709C34.4023 42.5807 34.8387 43.017 34.8387 43.5484V51.2904C34.8387 51.8218 34.4023 52.2581 33.8709 52.2581ZM27.0967 50.3226H32.9032V44.5162H27.0967V50.3226Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M49.3548 36.7742H41.6129C41.0815 36.7742 40.6451 36.3379 40.6451 35.8065V28.0645C40.6451 27.5331 41.0815 27.0968 41.6129 27.0968H49.3548C49.8862 27.0968 50.3226 27.5331 50.3226 28.0645V35.8065C50.3226 36.3379 49.8862 36.7742 49.3548 36.7742ZM42.5806 34.8387H48.3871V29.0323H42.5806V34.8387Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M49.3548 52.2581H41.6129C41.0815 52.2581 40.6451 51.8218 40.6451 51.2904V43.5484C40.6451 43.017 41.0815 42.5807 41.6129 42.5807H49.3548C49.8862 42.5807 50.3226 43.017 50.3226 43.5484V51.2904C50.3226 51.8218 49.8862 52.2581 49.3548 52.2581ZM42.5806 50.3226H48.3871V44.5162H42.5806V50.3226Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M18.3872 36.7742H10.6452C10.1138 36.7742 9.67749 36.3379 9.67749 35.8065V28.0645C9.67749 27.5331 10.1138 27.0968 10.6452 27.0968H18.3872C18.9186 27.0968 19.3549 27.5331 19.3549 28.0645V35.8065C19.3549 36.3379 18.9186 36.7742 18.3872 36.7742ZM11.613 34.8387H17.4194V29.0323H11.613V34.8387Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M18.3872 52.2581H10.6452C10.1138 52.2581 9.67749 51.8218 9.67749 51.2904V43.5484C9.67749 43.017 10.1138 42.5807 10.6452 42.5807H18.3872C18.9186 42.5807 19.3549 43.017 19.3549 43.5484V51.2904C19.3549 51.8218 18.9186 52.2581 18.3872 52.2581ZM11.613 50.3226H17.4194V44.5162H11.613V50.3226Z"
                                        fill="#3F3F3F"/>
                                </svg>
                            </div>
                            <p>Производим посуду
                                с 2015 года!</p>
                        </div>
                        <div className="tablewareProduct__list_item">
                            <div className="box">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.9995 55.9958C46.1496 55.9958 55.9993 46.1468 55.9993 33.9975C55.9993 21.8481 46.1496 11.9991 33.9995 11.9991C21.8495 11.9991 11.9998 21.8481 11.9998 33.9975C12.0136 46.1411 21.8551 55.9821 33.9995 55.9958ZM16.9998 32.9975H14.0508C14.5721 22.7567 22.7581 14.5712 32.9996 14.05V16.9987C32.9996 17.5509 33.4473 17.9987 33.9995 17.9987C34.5518 17.9987 34.9995 17.5509 34.9995 16.9987V14.05C45.241 14.5712 53.427 22.7567 53.9483 32.9975H49.9993C49.4471 32.9975 48.9993 33.4453 48.9993 33.9975C48.9993 34.5497 49.4471 34.9974 49.9993 34.9974H53.9483C53.427 45.2381 45.241 53.4238 34.9995 53.945V50.9962C34.9995 50.444 34.5518 49.9963 33.9995 49.9963C33.4473 49.9963 32.9996 50.444 32.9996 50.9962V53.945C22.7582 53.4238 14.5721 45.2382 14.0508 34.9974H16.9998C17.552 34.9974 17.9998 34.5497 17.9998 33.9975C17.9998 33.4453 17.552 32.9975 16.9998 32.9975Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M56.5142 21.0157C56.2161 20.4992 55.9003 19.9933 55.5673 19.4985L58.0362 17.0297C58.4266 16.6393 58.4266 16.0063 58.0362 15.6158L52.3863 9.96626C51.9958 9.57591 51.3628 9.57591 50.9723 9.96626L48.4994 12.4311C44.4992 9.73052 39.8227 8.20401 34.9995 8.0244V1.99985H41.9994C42.5517 1.99985 42.9994 1.55213 42.9994 0.999925C42.9994 0.447717 42.5517 0 41.9994 0H25.9997C25.4474 0 24.9997 0.447717 24.9997 0.999925C24.9997 1.55213 25.4474 1.99985 25.9997 1.99985H32.9996V8.0334C24.0812 8.37387 15.9623 13.2698 11.4998 20.9984H5.99992C5.44768 20.9984 4.99993 21.4461 4.99993 21.9984C4.99993 22.5506 5.44768 22.9983 5.99992 22.9983H11.9998C12.0258 22.9983 12.0478 22.9853 12.0738 22.9833C12.4342 22.9879 12.7685 22.7964 12.9468 22.4833C19.3091 10.8562 33.8929 6.58776 45.5209 12.9495C57.1489 19.3113 61.4173 33.8945 55.0551 45.5216C48.6929 57.1487 34.109 61.4172 22.4811 55.0554C18.4571 52.8538 15.1484 49.5453 12.9467 45.5216C12.7701 45.2072 12.4363 45.0138 12.0757 45.0166C12.0497 45.0166 12.0267 45.0016 11.9997 45.0016H5.9998C5.44755 45.0016 4.99981 45.4494 4.99981 46.0016C4.99981 46.5538 5.44755 47.0015 5.9998 47.0015H11.4997C18.676 59.4311 34.5703 63.6902 47.0006 56.5144C59.4311 49.3386 63.6904 33.4453 56.5142 21.0157ZM50.1335 13.6327L51.6792 12.0871L55.9151 16.3228L54.3672 17.8707C53.1222 16.3013 51.7017 14.8794 50.1335 13.6327Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M9.99987 33.9975C9.99987 33.4453 9.55212 32.9975 8.99988 32.9975H0.999987C0.447744 32.9975 0 33.4453 0 33.9975C0 34.5497 0.447744 34.9974 0.999987 34.9974H8.99988C9.55212 34.9974 9.99987 34.5497 9.99987 33.9975Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M2.99996 28.9978H9.99987C10.5521 28.9978 10.9999 28.5501 10.9999 27.9979C10.9999 27.4457 10.5521 26.998 9.99987 26.998H2.99996C2.44772 26.998 1.99997 27.4457 1.99997 27.9979C1.99997 28.5501 2.44759 28.9978 2.99996 28.9978Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M10.9999 39.997C10.9999 39.4448 10.5521 38.9971 9.99987 38.9971H2.99996C2.44772 38.9971 1.99997 39.4448 1.99997 39.997C1.99997 40.5492 2.44772 40.9969 2.99996 40.9969H9.99987C10.5521 40.9969 10.9999 40.5492 10.9999 39.997Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M31.2926 40.704C31.6831 41.0943 32.3161 41.0943 32.7066 40.704L46.6064 26.805C46.9901 26.4078 46.9791 25.7748 46.5819 25.3911C46.1944 25.0169 45.58 25.0169 45.1924 25.3911L31.9996 38.5831L26.0497 32.6336C25.6524 32.25 25.0193 32.2608 24.6357 32.6581C24.2614 33.0455 24.2614 33.6599 24.6357 34.0475L31.2926 40.704Z"
                                        fill="#3F3F3F"/>
                                </svg>
                            </div>
                            <p>Вы будете уверены что продукция будет поставлена в срок</p>
                        </div>
                        <div className="tablewareProduct__list_item">
                            <div className="box">
                                <svg width="74" height="60" viewBox="0 0 74 60" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.4408 35.7692H4.61266C3.97638 35.7692 3.45953 36.2863 3.45953 36.923C3.45953 37.5597 3.97638 38.0769 4.61266 38.0769H33.4408C34.0771 38.0769 34.5939 37.5597 34.5939 36.923C34.5939 36.2863 34.0771 35.7692 33.4408 35.7692Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M61.1158 16.1538H44.972C44.3358 16.1538 43.8189 16.671 43.8189 17.3077C43.8189 17.9443 44.3358 18.4615 44.972 18.4615H61.1158C61.7521 18.4615 62.2689 17.9443 62.2689 17.3077C62.2689 16.671 61.7521 16.1538 61.1158 16.1538Z"
                                        fill="#3F3F3F"/>
                                    <path
                                        d="M72.647 11.5384H69.0712C68.5348 8.90886 66.207 6.92306 63.422 6.92306H62.7162C63.9306 5.57089 64.575 3.65063 64.575 1.15384C64.575 0.517172 64.0582 0 63.4219 0C60.1124 0 57.7829 1.09821 56.5032 3.21784C55.2234 1.0982 52.894 0 49.5844 0C48.9481 0 48.4313 0.517172 48.4313 1.15384C48.4313 3.65063 49.0758 5.57089 50.2901 6.92306H49.5844C46.7993 6.92306 44.4715 8.90886 43.9351 11.5384H40.3593C39.7231 11.5384 39.2062 12.0556 39.2062 12.6923V27.7212C38.24 26.9898 37.0498 26.5385 35.7468 26.5385H29.2755C30.4899 25.1864 31.1343 23.2661 31.1343 20.7693C31.1343 20.1327 30.6175 19.6155 29.9812 19.6155C26.6717 19.6155 24.3422 20.7137 23.0625 22.8333C21.7827 20.7137 19.4533 19.6155 16.1437 19.6155C15.5074 19.6155 14.9906 20.1327 14.9906 20.7693C14.9906 23.2661 15.6351 25.1864 16.8494 26.5385H10.3781C7.59307 26.5385 5.26521 28.5243 4.72884 31.1539H3.45938C1.55204 31.1539 0 32.7069 0 34.6154V46.1539C0 53.7888 6.72516 60 14.9906 60H31.1344C34.1948 60 37.0421 59.1449 39.4163 57.6841C39.8925 59.0285 41.162 60 42.6656 60H70.3406C72.248 60 73.8 58.447 73.8 56.5385V12.6924C73.8 12.0558 73.2831 11.5386 72.6469 11.5386L72.647 11.5384ZM62.2056 2.37098C61.8998 5.12728 60.4749 6.55475 57.7187 6.86069C58.0245 4.1028 59.4505 2.67599 62.2056 2.37098ZM55.2868 6.85963C52.5323 6.55366 51.1057 5.12676 50.7999 2.36993C53.5561 2.6759 54.982 4.1028 55.2868 6.85963ZM49.5845 9.23061H63.422C64.9257 9.23061 66.2081 10.1954 66.6842 11.5383H46.322C46.7982 10.1954 48.0805 9.23061 49.5842 9.23061H49.5845ZM28.765 21.9862C28.4592 24.7425 27.0342 26.17 24.2781 26.4759C24.5839 23.718 26.0099 22.2912 28.765 21.9862ZM21.8462 26.4748C19.0916 26.1689 17.6651 24.743 17.3593 21.9851C20.1155 22.2911 21.5414 23.718 21.8462 26.4748ZM10.3782 28.8458H35.747C37.2507 28.8458 38.5331 29.8106 39.0092 31.1535H7.11574C7.59193 29.8106 8.87429 28.8458 10.378 28.8458H10.3782ZM14.9907 57.6919C7.99686 57.6919 2.30636 52.5155 2.30636 46.1535V34.615C2.30636 33.9794 2.82423 33.4612 3.45948 33.4612H42.6657C43.301 33.4612 43.8189 33.9794 43.8189 34.615V46.1535C43.8189 49.5517 42.1859 52.6021 39.6079 54.7151C39.5811 54.7383 39.5539 54.7553 39.5307 54.7795C37.2898 56.5854 34.3551 57.6919 31.1345 57.6919L14.9907 57.6919ZM71.4939 56.538C71.4939 57.1737 70.976 57.6919 70.3407 57.6919H42.6657C42.0305 57.6919 41.5126 57.1737 41.5126 56.538V56.1213C44.349 53.6004 46.1251 50.0673 46.1251 46.1534V34.615C46.1251 32.7065 44.5731 31.1535 42.6657 31.1535H41.5126V13.8458H71.4939V56.538Z"
                                        fill="#3F3F3F"/>
                                </svg>
                            </div>
                            <p>Создаем уникальную упаковку по вашему заказу</p>
                        </div>
                    </div>
                    <OrderForm/>
                    <div className="tablewareProduct__text">
                        <p>Завод БК производит контейнер Плошка объемом 360 мл. Диаметр Плошки 112 мм.</p>
                        <br/>
                        <p>Контейнер Плошка 360 мл - один из самых востребованных объемов пластиковых одноразовых
                            контейнеров и одноразовой пластиковой посуды. Он достаточно универсален и используется для
                            самых различных целей.
                        </p>
                        <br/>
                        <p><span>Контейнер Плошка может быть применен в расфасовке:</span></p>
                        <br/>
                        <p> Жидких продуктов питания
                        </p>
                        <p>Горячих вторых блюд.</p>
                        <p>Салатов.</p>
                        <p> Меда.</p>
                        <p>Варенья.</p>
                        <p>Чая.</p>
                        <p>Трав и травяных сборов.</p>
                        <p>Любых горячих или холодных блюд.</p>
                        <p>Десертов, пирожных.</p>
                        <p>Конфет.</p>
                        <p>Рыбных деликатесов.</p>
                        <br/>
                        <p><span>Плошка</span> - универсальный контейнер, который мы производим сами и предлагаем купить
                            одноразовый
                            контейнер оптом напрямую от производителя. Вы можете приобрести у нас цветные контейнеры и
                            разнообразить внешний вид и ассортимент своего товара.</p>
                        <br/>
                        <p> Контейнер Плошка вы всегда сможете укомплектовать крышкой подходящего диаметра из нашего
                            ассортимента.</p>
                    </div>
                    <div className="tablewareProduct__cards">
                        <div className="tablewareProduct__cards_card">
                            <h2 className="tablewareProduct__cards_title">Ранее вы смотрели</h2>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={40}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: false,
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={0}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>

                                        <h3>Крепление верх-низ</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="tablewareProduct__cards_card margin">
                            <h2 className="tablewareProduct__cards_title">С этим товаром покупают</h2>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={40}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: false,
                                }}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tablewareProduct__cards_item">
                                        <div className="tablewareProduct__cards_item-img">
                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={40}
                                                slidesPerGroup={1}
                                                loop={true}
                                                loopFillGroupWithBlank={true}
                                                pagination={{
                                                    clickable: false,
                                                }}
                                                navigation={true}
                                                modules={[Navigation]}
                                                className="mySwiper"
                                            >
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img src={Item1} alt="Item1"/>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <h3>Мост Винтек 532</h3>
                                        <p>360 мл</p>
                                        <button>Заказать</button>
                                        <a href="#">Смотреть подробнее</a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PlasticTablewareProduct;