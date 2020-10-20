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
            <div className="promo-wrapper"><Promo /></div>
            <a ref={formEl}></a>
            <div className="form-wrapper"><Form /></div>
            <div className="example-wrapper"><Example toForm={toForm} /></div>
            <div className="gifts-wrapper"><Gifts /></div>
            <div className="faq-wrapper"><Faq /></div>
        </React.Fragment >
    );
}

ReactDOM.render(<App />, document.getElementById('appNhy'));