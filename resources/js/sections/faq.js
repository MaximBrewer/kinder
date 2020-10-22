import React, { useState } from "react";
import Counter from '../utils/counter';
import { ArrowDown } from "../utils/icons"
import { Scrollbars } from 'react-custom-scrollbars-with-mobile';

function Faq() {


    const [questions, setQuestion] = useState([
        {
            question: "Что это за проект?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
        {
            question: "Как мне отправить заявку?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
        {
            question: "Через сколько будет готово видео?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
        {
            question: "Что делать, если я не получил свое видео?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
        {
            question: "Что мне делать, если подарка, который я выбрал, нет в магазине?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
        {
            question: "Что делать, если мне пришло письмо, что заявка не прошла модерацию?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
        {
            question: "На какой продукции Kinder я могу увидеть дополненную реальность?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
        {
            question: "После считывания QR-кода не могу запустить дополненную реальность. Что делать?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто! Вы пишете пиьсмо Деду Морозу через специальную форму. Мы снимаем для вас уникальное видеопоздравление от Деда Мороза, в котором он поздравит Вашего ребенка с Новым Годом и подарит ему Киндер подарок",
            isOpen: false
        },
    ]);

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
            backgroundColor: "#E54C2E",
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
            backgroundColor: "#ffffff",
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    const openQuestion = (index) => {
        setQuestion(prevState => {
            let newQ = [];
            for (let i in prevState) {
                if (index == i) prevState[i].isOpen = true; else prevState[i].isOpen = false;
                newQ.push(prevState[i]);
            }
            return newQ;
        })
    }

    return (
        <div className="faq-hny">
            <div className="h1">Остались вопросы?<br />Спросите Деда Мороза</div>
            <p>если вы не нашли ответа на свой вопрос, <br />напишите на kinder@newyear.com.</p>
            <div className="faq">
                <Scrollbars style={{ height: 600 }}
                    renderView={renderView}
                    renderThumbHorizontal={renderThumbHorizontal}
                    renderThumbVertical={renderThumbVertical}
                    renderTrackHorizontal={renderTrackHorizontal}
                    renderTrackVertical={renderTrackVertical}
                    mobile={true}
                >
                    <div style={{ paddingRight: "10px" }}>
                        {questions.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div onClick={(e) => openQuestion(index)} className="question">{item.question} <ArrowDown style={{ fill: "#ffffff", stroke: "#ffffff", width: "17px", height: "11px" }} /></div>
                                <div className="answer" style={{ maxHeight: item.isOpen ? "100%" : "0" }}><div>{item.answer}</div></div>
                            </div>
                        ))}
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
}

export default Faq;
