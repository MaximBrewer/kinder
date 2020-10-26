import React, { useState } from "react";
import Counter from '../utils/counter';
import { ArrowDown } from "../utils/icons"
import { Scrollbars } from 'react-custom-scrollbars-with-mobile';

function Faq() {

    const [questions, setQuestion] = useState([
        {
            question: "Что это за проект?",
            answer: "Уникальная возможность подарить детям веру в Деда Мороза! Всё очень просто: Вы – отправляете заявку Kinder Деду Морозу через специальную форму и Дедушка записывает для вас уникальное, интерактивное, видеопоздравление, в котором он поздравит детишек с Новым Годом и передаст им Kinder подарок.",
            isOpen: true
        },
        {
            question: "Как мне отправить заявку?",
            answer: "Специально для вас мы создали простую форму на главной странице проекта. Вам нужно всего лишь заполнить все поля и  нажать на кнопку «отправить заявку». И не забудьте выбрать Kinder подарок",
            isOpen: false
        },
        {
            question: "Через сколько будет готово видео?",
            answer: "Kinder Дедушке Морозу приходит очень и очень много заявок, поэтому производство видео может до четырых-пяти дней, с момента прохождения проверки заявки.",
            isOpen: false
        },
        {
            question: "Что мне делать, если я не получил свое видео?",
            answer: " Напишите нам  info@kindernewyear.ru и мы поможем отыскать ваше видеопоздравление",
            isOpen: false
        },
        {
            question: "Что мне делать, если подарка, который я выбрал, нет в магазине?",
            answer: "Если вам не удалось найти нужный подарок, просто отправьте заявку еще раз с новым Kinder подарком.",
            isOpen: false
        },
        {
            question: "Что мне делать, если мне пришло письмо, что заявка не прошла модерацию?",
            answer: "Пришлите нам заявку повторно. При заполнении анкеты, учтите причину отказа в прошлой заявке!",
            isOpen: false
        },
        {
            question: "На какой продукции Kinder я могу увидеть дополненную реальность?",
            answer: "В активации участвуют упаковки Kinder с новогодним дизайном, кроме упаковок Kinder Сюрприз 20г/60г/100г/220г, Kinder Joy 20г, Kinder Фигурный Шоколад 55г/110г, Kinder Schoko-bons 46г/125г.",
            isOpen: false
        },
        {
            question: "После считывания QR-кода не могу запустить дополненную реальность. Что делать?",
            answer: "После считывания QR-кода у вас откроется страница с кнопкой «Начать». По клику на кнопку появится системной всплывающее окно с запросом на доступ к Камере. Разрешите доступ к Камере и дождитесь загрузки страницы. Далее на экране появится анимация или сообщение о необходимости навести камеру на упаковку. Следуйте инструкции. Если у вас останутся вопросы, свяжитесь с нами через форму обратной связи.",
            isOpen: false
        },
        {
            question: "Чем сканировать QR-код?",
            answer: "Отсканировать QR-код можно с помощью следующих приложений: встроенная «Камера» смартфона, «VK», «QR-ридер» или через браузер «Chrome». В верхней/нижней части экрана (в зависимости от устройства) появится ссылка перехода, по клику на неё откроется страница игры.",
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
            <p>Если вы не нашли ответа на свой вопрос, <br />напишите на info@kindernewyear.ru.</p>
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
