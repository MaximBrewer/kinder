import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
window.axios = axios;

import Promo from './sections/promo';
import Form from './sections/form';
import Example from './sections/example';
import Gifts from './sections/gifts';
import Faq from './sections/faq';

import scrollToElement from "./utils/scroll-to-ref";

const App = () => {
    const formEl = useRef(null);
    const toForm = () => scrollToElement(formEl);
    return (
        <React.Fragment>
            <div className={`promo-mobile-header`}></div>
            <div className="promo-outer">
                <div className={`sidebar-wrapper visible-sm`}>
                    <div className={`sidebar`}>
                        <ul>
                            <li>
                                <a href="#">ПРАВИЛА АКЦИИ</a>
                            </li>
                            <li>
                                <a href="/ru/ru/kinder-liven-up-the-picture">ОЖИВляй УПАКОВКИ</a>
                            </li>
                            <li>
                                <a href="#">ПОДАРКИ kinder</a>
                            </li>
                            <li>
                                <a href="#">F.A.Q.</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="promo-wrapper">
                    <div>
                        <div className="nhy-menu-container">
                            <div className={`sidebar-mobile hidden-sm`}>
                                <ul>
                                    <li>
                                        <a href="#">ПРАВИЛА АКЦИИ</a>
                                    </li>
                                    <li>
                                        <a href="#">ОЖИВляй УПАКОВКИ</a>
                                    </li>
                                    <li>
                                        <a href="#">ПОДАРКИ kinder</a>
                                    </li>
                                    <li>
                                        <a href="#">F.A.Q.</a>
                                    </li>
                                </ul>
                            </div>
                            <Promo toForm={toForm} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-wrapper">
                <div>
                    <div className="nhy-container">
                        <Form formEl={formEl} />
                    </div>
                </div>
            </div>
            <div className="example-wrapper">
                <div>
                    <div className="nhy-container">
                        <Example toForm={toForm} />
                    </div>
                </div>
            </div>
            <div className="gifts-wrapper">
                <div>
                    <div className="nhy-container">
                        <Gifts />
                    </div>
                </div>
            </div>
            <div className="faq-wrapper">
                <div className="nhy-container">
                    <Faq />
                </div>
            </div>
        </React.Fragment >
    );
}

ReactDOM.render(<App />, document.getElementById('appNhy'));