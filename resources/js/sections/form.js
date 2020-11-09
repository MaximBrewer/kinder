import React, { useState, useRef, useEffect } from "react";
import Select from "../utils/select";
import GirlSelect from "../utils/girl-select";
import BoySelect from "../utils/boy-select";
import Checkbox from "../utils/checkbox";
import Upload from "../utils/upload";
import Modal from "react-modal";
import { ArrowPrewMobile, ArrowNextMobile } from "../utils/icons";
import { Close, Ok, Vk, Instagram, Fb } from "../utils/icons";
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
        let toY = document.getElementById("formEl").getBoundingClientRect().top;
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
                content: { ...prevState.modalStyles.content, top: toY }
            }
        }));
    }

    const onBoysChange = e => {
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

    const [files, setFiles] = useState([]);

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
        fromValue: null,
        ageValue: null,
        giftValue: window.App.data.gifts[0],
        achieveOptions: [],
        agree: false,
        cmail: false,
        personal: false,
        fileText: "ЗАГРУЗИТЬ ФОТО РЕБЕНКА",
        news: false,
        isOpen: false,
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

    useEffect(() => {
        window.dispatchEvent(new CustomEvent("reactloaded"));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        let errors = {};

        if (!state.boysValue && !state.girlsValue)
            errors = { ...errors, name: "Выберите имя" };
        if (!state.ageValue)
            errors = { ...errors, ageValue: "Выберите возраст" };
        if (!state.achieveValue)
            errors = { ...errors, achieveValue: "Выберите достижение" };
        if (!state.hobbyValue)
            errors = { ...errors, hobbyValue: "Выберите хобби" };
        if (!state.fromValue)
            errors = { ...errors, fromValue: "Выберите от кого" };
        if (!state.giftValue)
            errors = { ...errors, giftValue: "Выберите подарок" };
        if (!state.emailValue)
            errors = { ...errors, emailValue: "Введите E-mail" };
        // if (!files.length)
        //     errors = { ...errors, photo: "Добавьте фото ребенка" };
        if (!state.agree)
            errors = {
                ...errors,
                agree: "Вы должны согласиться с правилами"
            };
        if (!state.cmail)
            errors = {
                ...errors,
                cmail:
                    "Вы должны согласиться на использование указанного e-mail"
            };
        if (!state.personal)
            errors = {
                ...errors,
                personal:
                    "Вы должны согласиться на обработку персональных данных"
            };

        if (Object.keys(errors).length < 1) {
            let formData = new FormData();
            files.length && formData.append("photo", files[0]);
            formData.append(
                "name",
                state.boysValue ? state.boysValue.value : state.girlsValue.value
            );
            formData.append("achieve", state.achieveValue.value);
            formData.append("email", state.emailValue);
            formData.append("hobby", state.hobbyValue.value);
            formData.append("from", state.fromValue.value);
            formData.append("age", state.ageValue.value);
            formData.append("gift", state.giftValue.id);
            formData.append("gender", state.genderValue);
            formData.append("agree", !!state.agree);
            formData.append("cmail", !!state.cmail);
            formData.append("personal", !!state.personal);
            formData.append("news", !!state.news);

            axios
                .post("/patch", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(() => {
                    setState(prevState => ({
                        ...initialState,
                        contHeight: prevState.contHeight
                    }));
                    window.dispatchEvent(new CustomEvent("reactloaded"));
                    setFiles([]);
                    openModal();
                })
                .catch(err => {
                    let errors = "";
                    for (let i in err.response.data.errors) {
                        errors += err.response.data.errors[i] + "\n\r";
                    }
                    window.dispatchEvent(new CustomEvent("reactloaded"));
                    alert(errors);
                    console.log(err.response.status, err.response.data);
                    // setState(prevState => ({ ...prevState, errors }));
                });
        } else {
            setState(prevState => ({ ...prevState, errors }));
        }
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
                                style={{ minHeight: 52 }}
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
                                {window.ie11 ? (
                                    <div className="fileinput-wrapper">
                                        <div
                                            className={`nhy-btn`}
                                            style={{
                                                position: "relative",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                maxWidth: "100%",
                                                whiteSpace: "nowrap"
                                            }}
                                        >
                                            <input
                                                style={{
                                                    opacity: 0,
                                                    zIndex: 1,
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%"
                                                }}
                                                type="file"
                                                onChange={e => {
                                                    let name = e.target.value;
                                                    setFiles([
                                                        e.target.files[0]
                                                    ]);
                                                    setState(prevState => ({
                                                        ...prevState,
                                                        fileText: name
                                                    }));
                                                }}
                                            />
                                            {state.fileText}
                                        </div>
                                    </div>
                                ) : (
                                    <Upload setFiles={setFiles} files={files} />
                                )}
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
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                        borderRadius: "10px",
                                        backgroundColor: "#ffffff",
                                        padding: "5px"
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
                    <Checkbox state={state} setState={setState} field={`cmail`}>
                        <div
                            className="hint--right hint--error hint--always hint--rounded"
                            aria-label={
                                state.errors.cmail ? state.errors.cmail : ``
                            }
                        >
                            Даю согласие на использование указанного e-mail в
                            целях Акции. {state.cmail}
                        </div>
                    </Checkbox>
                </div>
                <div className="checkbox-wrapper" className="form-flex">
                    <Checkbox state={state} setState={setState} field={`agree`}>
                        <div
                            className="hint--right hint--error hint--always hint--rounded"
                            aria-label={
                                state.errors.agree ? state.errors.agree : ``
                            }
                        >
                            Cогласен(-на) с правилами {state.agree}
                        </div>
                    </Checkbox>
                </div>
                <div className="checkbox-wrapper" className="form-flex">
                    <Checkbox
                        state={state}
                        setState={setState}
                        field={`personal`}
                    >
                        <div
                            className="hint--right hint--error hint--always hint--rounded"
                            aria-label={
                                state.errors.personal
                                    ? state.errors.personal
                                    : ``
                            }
                        >
                            Даю согласие на обработку персональных данных{" "}
                            {state.personal}
                        </div>
                    </Checkbox>
                </div>
                <div className="checkbox-wrapper" className="form-flex">
                    <Checkbox state={state} setState={setState} field={`news`}>
                        <div>
                            Хочу получать новости от бренда Kinder {state.news}
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
                            position: "absolute",
                            right: "16px",
                            top: "16px"
                        }}
                    />
                </div>
                <p>
                    Kinder Дедушка Мороз пока в отпуске, но он получил вашу
                    заявку и вернется с поздравлением вашего ребенка после
                    15.11.2020.
                </p>
                <p>Следите за новостями Kinder в наших социальных сетях.</p>
                <div className={`social`}>
                    <a
                        target="_blank"
                        href={`https://www.instagram.com/kinder_rus/`}
                        style={{ marginRight: "12px" }}
                    >
                        <Instagram
                            style={{ height: "28px", fill: "#ffffff" }}
                        />
                    </a>
                    <a
                        target="_blank"
                        href={`https://ok.ru/kinder `}
                        style={{ marginRight: "12px" }}
                    >
                        <Ok style={{ height: "28px", fill: "#ffffff" }} />
                    </a>
                    <a
                        target="_blank"
                        href={`https://vk.com/kinder`}
                        style={{ marginRight: "12px" }}
                    >
                        <Vk style={{ height: "28px", fill: "#ffffff" }} />
                    </a>
                    <a
                        target="_blank"
                        href={`https://www.facebook.com/KinderRussia/`}
                        style={{ marginRight: "12px" }}
                    >
                        <Fb
                            style={{
                                height: "36px",
                                fill: "#ffffff",
                                top: 4,
                                position: "relative"
                            }}
                        />
                    </a>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default Form;
