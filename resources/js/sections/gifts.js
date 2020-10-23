import { Scrollbars } from 'react-custom-scrollbars-with-mobile';
import React, { useState } from "react";
import Checkbox from '../utils/checkbox'
import Carousel from '../utils/carousel'
import Modal from 'react-modal';
import { Close, Ok, Vk, Instagram, Lens } from "../utils/icons"
import { gifts } from "../data/gifts";
import { styles as customModalStyles } from "../styles/modal";
import { renderView, renderThumbHorizontal, renderTrackHorizontal, renderTrackVertical, renderThumbVertical } from '../utils/scrollbars'

Modal.setAppElement('#appNhy')


function Gifts(props) {
    const { customStyles } = props;

    const [state, setState] = useState({
        checked: false,
        isOpen: false,
        items: gifts[0].toys
    });


    function closeModal() {
        setState(prevState => ({
            ...prevState,
            isOpen: false
        }));
    }

    function openModal() {
        setState(prevState => ({
            ...prevState,
            isOpen: true
        }));
    }

    return (
        <div className="gifts-hny">
            <div className="h1" style={{ maxWidth: "90rem" }}>НОВОГОДНЯЯ КОЛЛЕКЦИЯ ПОДАРКОВ ОТ KINDER</div>
            <div className={`flex ` + (window.innerWidth >= 1024 && `flex-end`)}>
                <div className="toys-watch">
                    <div className="h3">Посмотрите игрушки внутри</div>
                    <div className="img-big">
                        <div style={{ backgroundImage: `url(` + gifts[0].img + `)` }}></div>
                    </div>
                    <div className={`lens-wrapper`} onClick={openModal}>
                        <div>Нажмите на лупу, чтобы посмотреть игрушки внутри</div>
                        <Lens />
                    </div>
                    <p>{gifts[0].toys[0].title}</p>
                </div>
                <div className="gift-select scroll-bar">
                    <div className="h3 text-center mb-1">ДРУГИЕ ПРОДУКТЫ</div>
                    <Scrollbars style={window.innerWidth < 1024 ? { height: 324 } : { height: 404 }}
                        renderView={renderView}
                        renderThumbHorizontal={renderThumbHorizontal}
                        renderThumbVertical={renderThumbVertical}
                        renderTrackHorizontal={renderTrackHorizontal}
                        renderTrackVertical={renderTrackVertical}
                        mobile={true}
                    >
                        <div style={{ paddingRight: "10px" }}>
                            <div className="flex space-between flex-wrap">
                                {gifts.map((item, index) => (
                                    <div className={`gift`} key={index}>
                                        <div style={{ backgroundImage: `url(` + item.img + `)` }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
            <div className={`shops`}>
                <div className="h2">Купить:</div>
                <div className={`flex space-between`}>
                    <a href="https://www.utkonos.ru/search/kinder/cat/52?&utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" style={{ backgroundImage: "url(/img/shops/utkonos.png)" }}></a>
                    <a href="https://pokupki.market.yandex.ru/search?cvredirect=2&utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020&text=%D0%BA%D0%B8%D0%BD%D0%B4%D0%B5%D1%80&glfilter=7893318%3A10715858" style={{ backgroundImage: "url(/img/shops/yandex.png)" }}></a>
                    <a href="https://www.ozon.ru/brand/kinder-138860371/?utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" style={{ backgroundImage: "url(/img/shops/ozon.png)" }}></a>
                    <a href="https://www.vprok.ru/catalog/1450/shokolad-batonchiki/brend/kinder?utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" style={{ backgroundImage: "url(/img/shops/cross.png)" }}></a>
                </div>
            </div>
            <Modal
                isOpen={state.isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customModalStyles}
            >

                <div onClick={closeModal} style={{ cursor: "pointer" }}><Close style={{ height: "52px", position: "absolute", right: "16px", top: "16px" }} /></div>
                <Carousel items={state.items} />
            </Modal>
        </div>
    );
}

export default Gifts;
