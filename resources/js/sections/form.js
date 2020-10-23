import React, { useState, useRef } from "react";
import Select from '../utils/select'
import GirlSelect from '../utils/girl-select'
import BoySelect from '../utils/boy-select'
import Checkbox from '../utils/checkbox'
import Button from '../utils/button'
import Upload from '../utils/upload'
import Modal from 'react-modal';
import { Close, Ok, Vk, Instagram } from "../utils/icons"
import { gifts } from "../data/gifts";
import { hobby as hobbyOptions } from "../data/hobby";
import { age as ageOptions } from "../data/age";
import { from as fromOptions } from "../data/from";
import { achieve as achieveGirlsOptions } from "../data/girls/achieve";
import { achieve as achieveBoysOptions } from "../data/boys/achieve";
import { styles as customModalStyles } from "../styles/modal";
import axios from "axios";

Modal.setAppElement('#appNhy')

function Form(props) {
    const { customStyles } = props;

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

    const onBoysChange = (e) => {
        console.log(e);
        setState(prevState => ({
            ...prevState,
            girlsValue: null,
            boysValue: e,
            achieveValue: null,
            achieveOptions: achieveBoysOptions,
        }))
    }

    const onGirlsChange = (e) => {
        setState(prevState => ({
            ...prevState,
            boysValue: null,
            girlsValue: e,
            achieveValue: null,
            achieveOptions: achieveGirlsOptions,
        }))
    }

    const emailChange = (e) => {
        const eventTarget = e.target;
        setState(prevState => ({ ...prevState, emailValue: eventTarget.value }))
    }

    const setFiles = (files) => {
        setState(prevState => ({
            ...prevState,
            photo: files[0]
        }))
    }

    const chooseGift = (gift) => {
        setState(prevState => ({
            ...prevState,
            giftValue: gift
        }))
    }

    const [state, setState] = useState({
        boysValue: null,
        girlsValue: null,
        achieveValue: null,
        emailValue: '',
        hobbyValue: null,
        ageValue: null,
        giftValue: null,
        achieveOptions: [],
        checked: false,
        isOpen: false,
        photo: null
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("photo", state.photo);
        formData.append("name", state.boysValue ? state.boysValue.value : state.girlsValue.value);
        formData.append("achieve", state.achieveValue.value);
        formData.append("email", state.emailValue);
        formData.append("hobby", state.hobbyValue.value);
        formData.append("age", state.ageValue.value);
        formData.append("gift", state.giftValue.id);

        axios.post("/patch", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(() => openModal()).catch(() => null);
        
    }

    return (
        <div className="form-hny">
            <a ref={props.formEl}></a>
            <div className="h1">ЗАПОЛНИТЕ ЗАЯВКУ</div>
            <p>Расскажите о главных достижениях ребёнка в этом году, его хобби и выберите подарок, который подарит Дед Мороз</p>
            <form className="order-form-flex" onSubmit={handleSubmit}>
                <div className="order-form">
                    <div className="form-flex">
                        <div>
                            <BoySelect onChange={onBoysChange} value={state.boysValue} />
                        </div>
                        <div>
                            <GirlSelect onChange={onGirlsChange} value={state.girlsValue} />
                        </div>
                    </div>
                    <div>
                        <Select options={ageOptions} placeholder={`Возраст`} onChange={(e) => setState(prevState => ({ ...prevState, ageValue: e }))} value={state.ageValue} />
                    </div>
                    <div>
                        <Select options={state.achieveOptions} onChange={(e) => setState(prevState => ({ ...prevState, achieveValue: e }))} value={state.achieveValue} placeholder={`Достижение`} />
                    </div>
                    <div>
                        <Select options={hobbyOptions} placeholder={`Хобби`} onChange={(e) => setState(prevState => ({ ...prevState, hobbyValue: e }))} value={state.hobbyValue} />
                    </div>
                    <div>
                        <Select options={fromOptions} placeholder={`От кого?`} required />
                    </div>
                    <div>
                        <input type="email" placeholder={`E-mail`} onChange={emailChange} value={state.emailValue} required />
                    </div>
                    <div className="form-flex">
                        <div>
                            <Upload setFiles={setFiles} />
                        </div>
                        <div>
                            <Button text={`ОТПРАВИТЬ ЗАЯВКУ`} style={{ display: "block", width: "100%" }} type="submit" />
                        </div>
                    </div>
                </div>
                <div className="gift-select pt-5 visible-sm">
                    <div className="h3 text-center mb-1">ВЫБЕРИТЕ ПОДАРОК</div>
                    <div className="flex space-between flex-wrap">
                        {gifts.map((item, index) => (
                            <div className={`gift` + (state.giftValue && state.giftValue.id == item.id ? ` active` : ``)} key={index} onClick={(e) => chooseGift(item)}>
                                <div style={{ backgroundImage: `url(` + item.img + `)` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
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
