import { Scrollbars } from 'react-custom-scrollbars-with-mobile';
import React, { useState, useRef } from "react";
import Parser from 'html-react-parser';
import Checkbox from '../utils/checkbox'
import Carousel from '../utils/carousel'
import Slider from "react-slick";
import { ArrowPrew, ArrowNext } from "../utils/icons";
import Modal from 'react-modal';
import { Close, Ok, Vk, Instagram, Lens } from "../utils/icons"
import { gifts } from "../data/gifts";
import { styles as customModalStyles } from "../styles/modal";
import { renderView, renderThumbHorizontal, renderTrackHorizontal, renderTrackVertical, renderThumbVertical } from '../utils/scrollbars'

Modal.setAppElement('#appNhy')


function Gifts(props) {
    const { customStyles, giftsEl } = props;

    const [state, setState] = useState({
        checked: false,
        isOpen: false,
        gift: gifts[0]
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
    const setting = {
        arrows: false,
        infinite: true,
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const chooseProduct = (e, index) => {
        e.preventDefault();
        setState(prevState => ({
            ...prevState,
            gift: gifts[index]
        }));
    }

    const sliderEl = useRef();

    return (
        <div className="gifts-hny">
            <div className="h1" style={{ maxWidth: "90rem" }} ref={giftsEl}>НОВОГОДНЯЯ КОЛЛЕКЦИЯ ПОДАРКОВ ОТ KINDER</div>
            {window.innerWidth < 768 ?
                <div className="hny-carousel-form">
                    <a
                        className="btn-control"
                        onClick={() => {
                            sliderEl.current.slickPrev();
                        }}
                    >
                        <ArrowPrew />
                    </a>
                    <div style={{ height: "90%", width: "90%", marginLeft: "5px", marginRight: "5px", borderRadius: "10px", backgroundColor: "#ffffff", }}>
                        <Slider {...setting} ref={sliderEl}>
                            {gifts.map((item, index) => (
                                <div className="toys-watch" key={index}>
                                    <div className="img-big">
                                        {(item.toys && item.toys.length) ? <div className="h3" style={{ position: "absolute", width: "100%", left: 0, top: "10px" }}>Посмотрите игрушки внутри</div> : ``}
                                        <img src={item.img} alt={``} style={{ width: "100%" }} />
                                        <div style={{ position: "absolute", width: "100%", height: "53px", left: 0, bottom: "0" }}>
                                            {(item.toys && item.toys.length) ? <div className={`lens-wrapper`} onClick={openModal}>
                                                <div>Нажмите на лупу, чтобы посмотреть игрушки внутри</div>
                                                <Lens />
                                            </div> : ``}
                                        </div>
                                    </div>
                                    <h4 className={`title`}>{Parser(item.title)}</h4>
                                    {/* <div className={`description`}>
                                        <Scrollbars style={window.innerWidth < 1024 ? { height: 56 } : { height: 56 }}
                                            renderView={renderView}
                                            renderThumbHorizontal={renderThumbHorizontal}
                                            renderThumbVertical={renderThumbVertical}
                                            renderTrackHorizontal={renderTrackHorizontal}
                                            renderTrackVertical={renderTrackVertical}
                                            mobile={true}
                                        >{Parser(item.description)}
                                        </Scrollbars>
                                    </div> */}
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <a
                        className="btn-control"
                        onClick={() => {
                            sliderEl.current.slickNext();
                        }}
                    >
                        <ArrowNext />
                    </a>
                </div>
                :
                <div className={`flex ` + (window.innerWidth >= 1024 && `flex-end`)}>
                    <div className="toys-watch">
                        <div className="img-big" style={{ position: "relative" }}>
                            {(state.gift.toys && state.gift.toys.length) ? <div className="h3" style={{ position: "absolute", width: "100%", left: 0, top: "10px" }}>Посмотрите игрушки внутри</div> : ``}
                            <img src={state.gift.img} alt={``} style={{ width: "100%" }} />
                            <div style={{ position: "absolute", width: "100%", height: "53px", left: 0, bottom: "0" }}>
                                {(state.gift.toys && state.gift.toys.length) ? <div className={`lens-wrapper`} onClick={openModal}>
                                    <div>Нажмите на лупу, чтобы посмотреть игрушки внутри</div>
                                    <Lens />
                                </div> : ``}
                            </div>
                        </div>
                        <h4 className={`title`}>{Parser(state.gift.title)}</h4>
                        <div className={`description`}>
                            <Scrollbars style={window.innerWidth < 1024 ? { height: 56 } : { height: 56 }}
                                renderView={renderView}
                                renderThumbHorizontal={renderThumbHorizontal}
                                renderThumbVertical={renderThumbVertical}
                                renderTrackHorizontal={renderTrackHorizontal}
                                renderTrackVertical={renderTrackVertical}
                                mobile={true}
                            >{Parser(state.gift.description)}
                            </Scrollbars>
                        </div>
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
                                        <div className={`gift` + (state.gift.id == item.id ? ` active` : ``)} key={index} onClick={(e) => chooseProduct(e, index)}>
                                            <div style={{ backgroundImage: `url(` + item.img + `)` }} ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Scrollbars>
                    </div>
                </div>

            }
            <div className={`shops`}>
                <div className="h2">Купить:</div>
                <div className={`logos`}>
                    <div><a href="https://www.utkonos.ru/search/kinder/cat/52?&utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" style={{ backgroundImage: "url(/img/shops/utkonos.png)" }}></a></div>
                    <div><a href="https://pokupki.market.yandex.ru/search?cvredirect=2&utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020&text=%D0%BA%D0%B8%D0%BD%D0%B4%D0%B5%D1%80&glfilter=7893318%3A10715858" style={{ backgroundImage: "url(/img/shops/yandex.png)" }}></a></div>
                    <div><a href="https://www.ozon.ru/brand/kinder-138860371/?utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" style={{ backgroundImage: "url(/img/shops/ozon.png)" }}></a></div>
                    <div><a href="https://www.vprok.ru/catalog/1450/shokolad-batonchiki/brend/kinder?utm_source=Kinder&utm_medium=website&utm_campaign=KinderNewYear2020" style={{ backgroundImage: "url(/img/shops/cross.png)" }}></a></div>
                </div>
            </div >
            <Modal
                isOpen={state.isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customModalStyles}
            >

                <div onClick={closeModal} style={{ cursor: "pointer" }}><Close style={{ height: "52px", position: "absolute", right: "16px", top: "16px" }} /></div>
                <Carousel items={state.gift.toys} />
            </Modal>
        </div >
    );
}

export default Gifts;
