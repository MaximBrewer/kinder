import React, { useState, useRef, useEffect } from "react";
import Select from "../utils/select";
import GirlSelect from "../utils/girl-select";
import BoySelect from "../utils/boy-select";
import Checkbox from "../utils/checkbox";
import Upload from "../utils/upload";
import Modal from "react-modal";
import { ArrowPrewMobile, ArrowNextMobile } from "../utils/icons";
import { Close, Ok, Vk, Instagram } from "../utils/icons";
import { styles as customModalStyles } from "../styles/modal";
import { Scrollbars } from "react-custom-scrollbars-with-mobile";
import {
    renderView,
    renderThumbHorizontal,
    renderTrackHorizontal,
    renderTrackVertical,
    renderThumbVertical
} from "../utils/scrollbars";
import axios from "axios";
import Slider from "react-slick";

Modal.setAppElement("#formEl");

function Form(props) {
    function closeModal() {
        setState(prevState => ({
            ...prevState,
            isOpen: false
        }));
    }

    function openModal() {
        let toY =
            document.getElementById("formEl").getBoundingClientRect().top;
        if (window.parent.postMessage) {
            window.parent.postMessage(
                {
                    scrolltop: toY
                },
                "*"
            );
        }
        setState(prevState => ({
            ...prevState,
            isOpen: true,
            modalStyles: {
                ...prevState.modalStyles,
                content: { ...prevState.modalStyles.content, top: toY + 300 }
            }
        }));
    }

    const onBoysChange = e => {
        console.log(e);
        setState(prevState => ({
            ...prevState,
            genderValue: "boy",
            errors: { ...prevState.errors, name: null },
            girlsValue: null,
            boysValue: e,
            achieveValue: null,
            achieveOptions: window.App.data.achieves.boys.map(
                (item, index) => ({ value: item.id, label: item.value })
            )
        }));
    };

    const onGirlsChange = e => {
        setState(prevState => ({
            ...prevState,
            errors: { ...prevState.errors, name: null },
            boysValue: null,
            genderValue: "girl",
            girlsValue: e,
            achieveValue: null,
            achieveOptions: window.App.data.achieves.girls.map(
                (item, index) => ({ value: item.id, label: item.value })
            )
        }));
    };

    const emailChange = e => {
        const eventTarget = e.target;
        setState(prevState => ({
            ...prevState,
            emailValue: eventTarget.value,
            errors: { ...prevState.errors, emailValue: null }
        }));
    };

    const setFiles = files => {
        setState(prevState => ({
            ...prevState,
            errors: { ...prevState.errors, photo: null },
            photo: files[0]
        }));
    };

    const chooseGift = gift => {
        setState(prevState => ({
            ...prevState,
            errors: { ...prevState.errors, gift: null },
            giftValue: gift
        }));
    };

    const initialState = {
        boysValue: null,
        girlsValue: null,
        achieveValue: null,
        genderValue: null,
        emailValue: "",
        hobbyValue: null,
        ageValue: null,
        giftValue: window.App.data.gifts[0],
        achieveOptions: [],
        checked: false,
        isOpen: false,
        photo: null,
        contHeight: 0,
        errors: {},
        modalStyles: customModalStyles
    };

    const [state, setState] = useState(initialState);

    const setting = {
        arrows: false,
        infinite: true,
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: index => {
            setState(prevState => ({
                ...prevState,
                giftValue: window.App.data.gifts[index]
            }));
        }
    };

    const sliderEl = useRef();
    const contEl = useRef();

    useEffect(() => {
        !!contEl.current &&
            setState(prevState => ({
                ...prevState,
                contHeight: contEl.current.offsetWidth
            }));
    }, [contEl.current]);

    const resize = () => {
        var scrollTop = document.scrollingElement.scrollTop;
        console.log(scrollTop);
    };

    useEffect(() => {
        resize();
        window.addEventListener("scroll", resize);
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("scroll", resize);
            window.removeEventListener("resize", resize);
        };
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        setState(prevState => ({
            ...prevState,
            errors: {}
        }));

        if (!state.boysValue && !state.girlsValue) {
            setState(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, name: "Выберите имя" }
            }));
        }
        if (!state.ageValue) {
            setState(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, ageValue: "Выберите возраст" }
            }));
        }
        if (!state.achieveValue) {
            setState(prevState => ({
                ...prevState,
                errors: {
                    ...prevState.errors,
                    achieveValue: "Выберите достижение"
                }
            }));
        }
        if (!state.hobbyValue) {
            setState(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, hobbyValue: "Выберите хобби" }
            }));
        }
        if (!state.fromValue) {
            setState(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, fromValue: "Выберите от кого" }
            }));
        }
        if (!state.photo) {
            setState(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, photo: "Добавьте фото" }
            }));
        }
        if (!state.giftValue) {
            setState(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, giftValue: "Выберите подарок" }
            }));
        }
        if (!state.emailValue) {
            setState(prevState => ({
                ...prevState,
                errors: { ...prevState.errors, emailValue: "Введите E-mail" }
            }));
        }
        if (!state.checked) {
            setState(prevState => ({
                ...prevState,
                errors: {
                    ...prevState.errors,
                    agree: "Вы должны согласиться с правилами"
                }
            }));
        }

        if (!state.checked || state.errors.lenght) return false;

        let formData = new FormData();
        formData.append("photo", state.photo);
        formData.append(
            "name",
            state.boysValue ? state.boysValue.value : state.girlsValue.value
        );
        formData.append("achieve", state.achieveValue.value);
        formData.append("email", state.emailValue);
        formData.append("hobby", state.hobbyValue.value);
        formData.append("age", state.ageValue.value);
        formData.append("gift", state.giftValue.id);
        formData.append("gender", state.genderValue);

        axios
            .post("/patch", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(() => {
                setState(initialState);
                openModal();
            })
            .catch(err => console.log(err));
    };

    const choose = (event, fieldName) => {
        setState(prevState => {
            prevState.errors[fieldName] = null;
            prevState[fieldName] = event;
            return {
                ...prevState,
                errors: prevState.errors
            };
        });
    };

    return (
        <React.Fragment>
            <a ref={props.formEl}></a>
            <div className="h1">ЗАПОЛНИТЕ ЗАЯВКУ</div>
            <p>
                Расскажите о главных достижениях ребёнка в этом году, его хобби
                и выберите подарок, который подарит Дед Мороз
            </p>
            <form onSubmit={handleSubmit}>
                <div className="order-form-flex">
                    <div className="order-form">
                        <div
                            className={
                                (window.innerWidth < 768
                                    ? `hint--bottom`
                                    : `hint--right`) +
                                ` form-flex hint--error hint--always hint--rounded`
                            }
                            aria-label={
                                state.errors.name ? state.errors.name : ``
                            }
                        >
                            <div>
                                <BoySelect
                                    onChange={onBoysChange}
                                    value={state.boysValue}
                                />
                            </div>
                            <div>
                                <GirlSelect
                                    onChange={onGirlsChange}
                                    value={state.girlsValue}
                                />
                            </div>
                        </div>
                        <div
                            className={
                                (window.innerWidth < 768
                                    ? `hint--bottom`
                                    : `hint--right`) +
                                ` hint--error hint--always hint--rounded`
                            }
                            aria-label={
                                state.errors.ageValue
                                    ? state.errors.ageValue
                                    : ``
                            }
                        >
                            <Select
                                options={[
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12
                                ].map((item, index) => ({
                                    value: item,
                                    label: item
                                }))}
                                placeholder={`Возраст`}
                                onChange={e => choose(e, "ageValue")}
                                value={state.ageValue}
                            />
                        </div>
                        <div
                            className={
                                (window.innerWidth < 768
                                    ? `hint--bottom`
                                    : `hint--right`) +
                                ` hint--error hint--always hint--rounded`
                            }
                            aria-label={
                                state.errors.achieveValue
                                    ? state.errors.achieveValue
                                    : ``
                            }
                        >
                            <Select
                                noOptionsMessage={() => "Выберите имя"}
                                options={state.achieveOptions}
                                onChange={e => choose(e, "achieveValue")}
                                value={state.achieveValue}
                                placeholder={`Достижение`}
                            />
                        </div>
                        <div
                            className={
                                (window.innerWidth < 768
                                    ? `hint--bottom`
                                    : `hint--right`) +
                                ` hint--error hint--always hint--rounded`
                            }
                            aria-label={
                                state.errors.hobbyValue
                                    ? state.errors.hobbyValue
                                    : ``
                            }
                        >
                            <Select
                                options={window.App.data.hobbies.map(
                                    (item, index) => ({
                                        value: item.id,
                                        label: item.value
                                    })
                                )}
                                placeholder={`Хобби`}
                                onChange={e => choose(e, "hobbyValue")}
                                value={state.hobbyValue}
                            />
                        </div>
                        <div
                            className={
                                (window.innerWidth < 768
                                    ? `hint--bottom`
                                    : `hint--right`) +
                                ` hint--error hint--always hint--rounded`
                            }
                            aria-label={
                                state.errors.fromValue
                                    ? state.errors.fromValue
                                    : ``
                            }
                        >
                            <Select
                                options={window.App.data.froms.map(
                                    (item, index) => ({
                                        value: item.id,
                                        label: item.value
                                    })
                                )}
                                placeholder={`От кого?`}
                                onChange={e => choose(e, "fromValue")}
                                value={state.fromValue}
                            />
                        </div>
                        <div
                            className={
                                (window.innerWidth < 768
                                    ? `hint--bottom`
                                    : `hint--right`) +
                                ` hint--error hint--always hint--rounded`
                            }
                            aria-label={
                                state.errors.emailValue
                                    ? state.errors.emailValue
                                    : ``
                            }
                        >
                            <input
                                type="email"
                                placeholder={`E-mail`}
                                onChange={emailChange}
                                value={state.emailValue}
                            />
                        </div>
                        <div className="form-flex">
                            <div
                                className={
                                    (window.innerWidth < 768
                                        ? `hint--bottom`
                                        : `hint--right`) +
                                    ` hint--error hint--always hint--rounded`
                                }
                                aria-label={
                                    state.errors.photo ? state.errors.photo : ``
                                }
                            >
                                <Upload setFiles={setFiles} />
                            </div>
                            <div>
                                <button
                                    style={{ width: "100%" }}
                                    className={"visible-sm nhy-btn"}
                                    type="submit"
                                >{`ОТПРАВИТЬ ЗАЯВКУ`}</button>
                            </div>
                        </div>
                    </div>
                    <div className="gift-select">
                        <div className="h3 text-center mb-1">
                            ВЫБЕРИТЕ ПОДАРОК
                        </div>
                        {window.innerWidth < 768 ? (
                            <div className="hny-carousel-form">
                                <a
                                    className="btn-control"
                                    onClick={() => {
                                        sliderEl.current.slickPrev();
                                    }}
                                >
                                    <ArrowPrewMobile />
                                </a>
                                <div
                                    style={{
                                        height: "80%",
                                        width: "80%",
                                        marginLeft: "20px",
                                        marginRight: "20px",
                                        borderRadius: "10px",
                                        backgroundColor: "#ffffff",
                                        padding: "10px"
                                    }}
                                >
                                    <Slider {...setting} ref={sliderEl}>
                                        {window.App.data.gifts.map(
                                            (item, index) => (
                                                <div key={index}>
                                                    <div
                                                        className={`img-wrapper`}
                                                    >
                                                        <div
                                                            className={`img`}
                                                            style={{
                                                                backgroundImage:
                                                                    "url(" +
                                                                    item.img +
                                                                    ")"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </Slider>
                                </div>
                                <a
                                    className="btn-control"
                                    onClick={() => {
                                        sliderEl.current.slickNext();
                                    }}
                                >
                                    <ArrowNextMobile />
                                </a>
                            </div>
                        ) : (
                            <div style={{ height: state.contHeight }}>
                                <Scrollbars
                                    style={{ height: "100%" }}
                                    renderView={renderView}
                                    renderThumbHorizontal={
                                        renderThumbHorizontal
                                    }
                                    renderThumbVertical={renderThumbVertical}
                                    renderTrackHorizontal={
                                        renderTrackHorizontal
                                    }
                                    renderTrackVertical={renderTrackVertical}
                                    mobile={true}
                                >
                                    <div
                                        className="gifts-container"
                                        ref={contEl}
                                    >
                                        {window.App.data.gifts.map(
                                            (item, index) => (
                                                <div
                                                    className={
                                                        `gift` +
                                                        (state.giftValue &&
                                                        state.giftValue.id ==
                                                            item.id
                                                            ? ` active`
                                                            : ``)
                                                    }
                                                    key={index}
                                                    onClick={e =>
                                                        chooseGift(item)
                                                    }
                                                >
                                                    <div
                                                        style={{
                                                            backgroundImage:
                                                                `url(` +
                                                                item.img +
                                                                `)`
                                                        }}
                                                    ></div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </Scrollbars>
                            </div>
                        )}
                        <div
                            className="hint--bottom hint--error hint--always hint--rounded"
                            aria-label={
                                state.errors.gift ? state.errors.gift : ``
                            }
                        ></div>
                    </div>
                </div>
                <div className="checkbox-wrapper" className="form-flex">
                    <Checkbox state={state} setState={setState}>
                        <div
                            className="hint--bottom hint--error hint--always hint--rounded"
                            aria-label={
                                state.errors.agree ? state.errors.agree : ``
                            }
                        >
                            Cогласен(-на) с правилами {state.checked}
                        </div>
                    </Checkbox>
                </div>
                <div className={"hidden-sm"}>
                    <button
                        style={{ width: "100%" }}
                        className={"nhy-btn"}
                        type="submit"
                    >{`ОТПРАВИТЬ ЗАЯВКУ`}</button>
                    <br />
                    <br />
                    <br />
                </div>
            </form>
            <Modal
                isOpen={state.isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={state.modalStyles}
            >
                <div onClick={closeModal} style={{ cursor: "pointer" }}>
                    <Close
                        style={{
                            height: "52px",
                            position: "absolute",
                            right: "16px",
                            top: "16px"
                        }}
                    />
                </div>
                <p>
                    Kinder Дедушка Мороз пока в отпуске, но он получил вашу
                    заявку и вернется с поздравлением вашего ребенка после
                    15.11.2020
                </p>
                <p>Следите за новостями Kinder в наших социальных сетях</p>
                <div className={`social`}>
                    <a href={`#`} style={{ marginRight: "12px" }}>
                        <Instagram
                            style={{ height: "28px", fill: "#ffffff" }}
                        />
                    </a>
                    <a href={`#`} style={{ marginRight: "12px" }}>
                        <Ok style={{ height: "28px", fill: "#ffffff" }} />
                    </a>
                    <a href={`#`} style={{ marginRight: "12px" }}>
                        <Vk style={{ height: "28px", fill: "#ffffff" }} />
                    </a>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default Form;
