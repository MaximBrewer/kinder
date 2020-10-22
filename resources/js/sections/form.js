import React, { useState } from "react";
import Select from '../utils/select'
import Checkbox from '../utils/checkbox'
import Button from '../utils/button'
import Upload from '../utils/upload'
import Modal from 'react-modal';
import { Close, Ok, Vk, Instagram } from "../utils/icons"

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const gifts = [
    { img: '/img/gifts/1.png', title: 'Chocolate' },
    { img: '/img/gifts/2.png', title: 'Chocolate' },
    { img: '/img/gifts/3.png', title: 'Chocolate' },
    { img: '/img/gifts/4.png', title: 'Chocolate' },
    { img: '/img/gifts/5.png', title: 'Chocolate' },
    { img: '/img/gifts/6.png', title: 'Chocolate' },
    { img: '/img/gifts/7.png', title: 'Chocolate' },
    { img: '/img/gifts/8.png', title: 'Chocolate' },
    { img: '/img/gifts/9.png', title: 'Chocolate' },
]

Modal.setAppElement('#appNhy')

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

function Form(props) {
    const { customStyles } = props;

    const [state, setState] = useState({
        checked: false,
        isOpen: false
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
        <div className="form-hny">
            <a ref={props.formEl}></a>
            <div className="h1">ЗАПОЛНИТЕ ЗАЯВКУ</div>
            <p>Расскажите о главных достижениях ребёнка в этом году, его хобби и выберите подарок, который подарит Дед Мороз</p>
            <div className="flex">
                <div className="order-form">
                    <div className="flex space-between">
                        <div style={{ width: "48%" }}>
                            <Button text={`Мальчик`} style={{
                                display: "block", width: "100%",
                                background: "#FFFFFF",
                                border: "3px solid #07A1F3", color: "#07A1F3"
                            }} onClick={() => { alert(1) }} />
                        </div>
                        <div style={{ width: "48%" }}>
                            <Button text={`Девочка`} style={{
                                display: "block", width: "100%",
                                background: "#FFFFFF",
                                border: "3px solid #f3410e", color: "#f3410e"
                            }} onClick={() => { alert(2) }} />
                        </div>
                    </div>
                    <div>
                        <Select options={options} placeholder={`Возраст`} />
                    </div>
                    <div>
                        <Select options={options} placeholder={`Достижение`} />
                    </div>
                    <div>
                        <Select options={options} placeholder={`Хобби`} />
                    </div>
                    <div>
                        <Select options={options} placeholder={`От кого?`} />
                    </div>
                    <div>
                        <Select options={options} />
                    </div>
                    <div className="flex space-between">
                        <div style={{ width: "48%" }}>
                            <Upload />
                        </div>
                        <div style={{ width: "48%" }}>
                            <Button text={`ОТПРАВИТЬ ЗАЯВКУ`} style={{ display: "block", width: "100%" }} onClick={openModal} />
                        </div>
                    </div>
                </div>
                <div className="gift-select pt-5">
                    <div className="h3 text-center mb-1">ВЫБЕРИТЕ ПОДАРОК</div>
                    <div className="flex space-between flex-wrap" style={{ marginTop: "-10px" }}>
                        {gifts.map((item, index) => (
                            <div className={`gift` + (index ? `` : ` active`)} key={index}>
                                <div style={{ backgroundImage: `url(` + item.img + `)` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="checkbox-wrapper">
                <Checkbox>
                    Cогласен(-на) с правилами {state.checked}
                </Checkbox>
            </div>
            <Modal
                isOpen={state.isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customModalStyles}
            >

                <div onClick={closeModal} style={{ cursor: "pointer" }}><Close style={{ height: "52px", position: "absolute", right: "16px", top: "16px" }} /></div>
                <p>Kinder Дедушка Мороз пока в отпуске, но он получил вашу заявку и вернется с поздравлением вашего ребенка после 15.11.2020</p>
                <p>Следите за новостями Kinder в наших социальных сетях</p>
                <div className={`social`}>
                    <a href={`#`} style={{ marginRight: "12px" }}><Instagram style={{ height: "28px", fill: "#ffffff" }} /></a>
                    <a href={`#`} style={{ marginRight: "12px" }}><Ok style={{ height: "28px", fill: "#ffffff" }} /></a>
                    <a href={`#`} style={{ marginRight: "12px" }}><Vk style={{ height: "28px", fill: "#ffffff" }} /></a>
                </div>
            </Modal>
        </div>
    );
}

export default Form;
