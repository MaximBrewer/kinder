import { Scrollbars } from 'react-custom-scrollbars';
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
        }
    };


    return (
        <div className="gifts-hny">
            <div className="h1">НОВОГОДНЯЯ КОЛЛЕКЦИЯ ПОДАРКОВ ОТ KINDER</div>
            <div className="flex flex-end">
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
                    <Scrollbars style={{ height: 404 }}
                        renderView={renderView}
                        renderThumbHorizontal={renderThumbHorizontal}
                        renderThumbVertical={renderThumbVertical}
                        renderTrackHorizontal={renderTrackHorizontal}
                        renderTrackVertical={renderTrackVertical}
                    >
                        <div className="flex space-between flex-wrap" style={{ marginTop: "-10px" }}>
                            {gifts.map((item, index) => (
                                <div className={`gift`} key={index}>
                                    <div style={{ backgroundImage: `url(` + item.img + `)` }}></div>
                                </div>
                            ))}
                        </div>
                    </Scrollbars>
                </div>
            </div>
            <div className={`shops`}>
                <div className="h2">Купить:</div>
                <div className={`flex space-between`}>
                    <a href="#" style={{backgroundImage: "url(/img/shops/utkonos.png)"}}></a>
                    <a href="#" style={{backgroundImage: "url(/img/shops/beru.png)"}}></a>
                    <a href="#" style={{backgroundImage: "url(/img/shops/ozon.png)"}}></a>
                    <a href="#" style={{backgroundImage: "url(/img/shops/cross.png)"}}></a>
                </div>
            </div>
            <Modal
                isOpen={state.isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customModalStyles}
            >

                <div onClick={closeModal} style={{ cursor: "pointer" }}><Close style={{ height: "52px", position: "absolute", right: "16px", top: "16px" }} /></div>
                <Carousel items={state.items}/>
            </Modal>
        </div>
    );
}

export default Gifts;
