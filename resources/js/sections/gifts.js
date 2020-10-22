import { Scrollbars } from 'react-custom-scrollbars-with-mobile';
import React, { useState } from "react";
import Checkbox from '../utils/checkbox'
import Carousel from '../utils/carousel'
import Modal from 'react-modal';
import { Close, Ok, Vk, Instagram, Lens } from "../utils/icons"

Modal.setAppElement('#appNhy')


const gifts = [
    {
        img: '/img/gifts/1.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' },
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' },
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/2.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/3.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/4.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/5.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/6.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/7.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/8.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/9.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/1.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/2.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/3.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/4.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/5.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Chocolate' }
        ]
    },
    {
        img: '/img/gifts/6.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/7.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/8.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
    {
        img: '/img/gifts/9.png', title: 'Chocolate', toys: [
            { img: '/img/toys/1.png', title: 'Kinder Сюрприз 220 г для мальчиков. Порадуйте ребёнка любимым Kinder Сюрприз с особой новогодней коллекцией игрушек!' }
        ]
    },
]

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
    function renderView({ style, ...props }) {
        const viewStyle = {
            paddingRight: 26
        };
        return (
            <div
                className="box"
                style={{ ...style, ...viewStyle }}
                {...props} />
        );
    }

    function renderThumbHorizontal({ style, ...props }) {
        return (
            <div />
        );
    }

    function renderTrackHorizontal({ style, ...props }) {
        return (
            <div />
        );
    }

    function renderTrackVertical({ style, ...props }) {
        const trackStyle = {
            width: "16px",
            padding: "4px",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            position: "absolute",
            right: 0,
            bottom: 0,
            top: 0
        };
        return (
            <div
                style={{ ...style, ...trackStyle }}
                {...props} />
        );
    }

    function renderThumbVertical({ style, ...props }) {
        const thumbStyle = {
            width: "8px",
            height: "102px",
            borderRadius: "4px",
            backgroundColor: "#E54C2E"
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    const customModalStyles = {
        content: {
            borderWidth: "0",
            backgroundColor: "#07A1F3",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(/img/popup-bg.png)",
            backgroundSize: "cover",
            boxShadow: "0px 0px 79px #000000",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            padding: "60px",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: "660px",
            borderRadius: "40px",
            fontSize: "28px",
            textAlign: "center",
            color: "#ffffff"
        },
        overlay: {
            zIndex: 100
        }
    };


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
