import React, { useState, useRef } from "react";
import Select from '../utils/select'
import GirlSelect from '../utils/girl-select'
import BoySelect from '../utils/boy-select'
import Checkbox from '../utils/checkbox'
import Button from '../utils/button'
import Upload from '../utils/upload'
import Modal from 'react-modal';
import { Close, Ok, Vk, Instagram } from "../utils/icons"
import Input from "../utils/input";

const fromOptions = [
    "Родители",
    "Мама",
    "Папа",
    "Бабушка",
    "Дедушка",
    "Бабушка и дедушка",
    "Сестра",
    "Брат",
    "Тётя",
    "Дядя",
    "Дядя и тётя",
    "Учитель",
    "Родственники",
    "Друзья",
    "Друг",
    "Крёстные",
    "Крёстный",
    "Крёстная",
    "Воспитатель"
].map((item, index) => ({ value: item, label: item }));

const ageOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => ({ value: item, label: item }));

const achieveGirlsOptions = [
    "Пошла в детский сад.",
    "Пошла в первый класс.",
    "Научилась считать.",
    "Прочитала первую книгу.",
    "Прочитала много книг.",
    "Научилась кататься на велосипеде.",
    "Научилась кататься на коньках.",
    "Научилась кататься на лыжах.",
    "Научилась кататься на роликах.",
    "Участвовала в спортивных соревнованиях.",
    "Выиграла в спортивных соревнованиях.",
    "Выучила таблицу умножения.",
    "Выучила первое стихотворение.",
    "Замечательно закончила четверть.",
    "Начала играть на музыкальном инструменте.",
    "Научилась плавать.",
    "Начала заниматься в спортивной секции.",
    "Начала заниматься танцами.",
    "Появился домашний питомец.",
    "Научилась готовить.",
    "Начала заниматься пением.",
    "Выиграла школьную олимпиаду.",
    "Участвовала в школьной олимпиаде.",
    "Начала заниматься в театральном кружке."
].map((item, index) => ({ value: item, label: item }));

const achieveBoysOptions = [
    "Пошёл в детский сад.",
    "Пошёл в первый класс.",
    "Научился считать.",
    "Прочитал первую книгу.",
    "Прочитал много книг.",
    "Научился кататься на велосипеде.",
    "Научился кататься на коньках.",
    "Научился кататься на лыжах.",
    "Научился кататься на роликах.",
    "Участвовал в спортивных соревнованиях.",
    "Выиграл в спортивных соревнованиях.",
    "Выучил таблицу умножения",
    "Выучил первое стихотворение.",
    "Замечательно закончил четверть.",
    "Начал играть на музыкальном инструменте.",
    "Научился плавать.",
    "Начал заниматься в спортивной секции.",
    "Начал заниматься танцами! ",
    "Появился домашний питомец! ",
    "Научился готовить.",
    "Начал заниматься пением.",
    "Выиграл школьную олимпиаду.",
    "Участвовал в школьной олимпиаде.",
    "Начал заниматься в театральном кружке"
].map((item, index) => ({ value: item, label: item }));

const hobbyOptions = [
    "Любишь играть в футбол!",
    "Любишь играть в баскетбол!",
    "Любишь играть в волейбол.",
    "Любишь играть в хоккей.",
    "Любишь играть в теннис.",
    "Любишь играть в шашки.",
    "Любишь играть в шахматы.",
    "Любишь играть в настольные игры.",
    "Любишь играть на музыкальных инструментах.",
    "Любишь кататься на коньках.",
    "Любишь кататься на самокате.",
    "Любишь кататься на скейтборде!",
    "Любишь кататься на роликах.",
    "Любишь кататься на велосипеде!",
    "Любишь кататься на лыжах!",
    "Любишь танцевать!",
    "Любишь рисовать.",
    "Любишь петь.",
    "Любишь читать.",
    "Любишь собирать пазлы.",
    "Любишь плавать.",
    "Любишь слушать сказки.",
    "Любишь смотреть мультфильмы.",
    "Любишь слушать музыку!"
].map((item, index) => ({ value: item, label: item }));

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

    const handleSubmit = (e) => {
        e.preventDefault();
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
        console.log(e);
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

    const [state, setState] = useState({
        boysValue: null,
        girlsValue: null,
        achieveValue: null,
        emailValue: '',
        achieveOptions: [],
        checked: false,
        isOpen: false
    });

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
                        <Select options={ageOptions} placeholder={`Возраст`} />
                    </div>
                    <div>
                        <Select options={state.achieveOptions} onChange={(e) => setState(prevState => ({ ...prevState, achieveValue: e }))} value={state.achieveValue} placeholder={`Достижение`} />
                    </div>
                    <div>
                        <Select options={hobbyOptions} placeholder={`Хобби`} />
                    </div>
                    <div>
                        <Select options={fromOptions} placeholder={`От кого?`} required />
                    </div>
                    <div>
                        <input type="email" placeholder={`E-mail`} onChange={emailChange} value={state.emailValue} required />
                    </div>
                    <div className="form-flex">
                        <div>
                            <Upload />
                        </div>
                        <div>
                            <Button text={`ОТПРАВИТЬ ЗАЯВКУ`} style={{ display: "block", width: "100%" }} type="submit" />
                        </div>
                    </div>
                </div>
                <div className="gift-select pt-5 visible-sm">
                    <div className="h3 text-center mb-1">ВЫБЕРИТЕ ПОДАРОК</div>
                    <div className="flex space-between flex-wrap" style={{ marginTop: "-10px" }}>
                        {gifts.map((item, index) => (
                            <div className={`gift` + (index ? `` : ` active`)} key={index}>
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
