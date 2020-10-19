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
            <Promo /><hr />
            <a ref={formEl}></a>
            <Form /><hr />
            <Example toForm={toForm} /><hr />
            <Gifts /><hr />
            <Faq />
        </React.Fragment >
    );
}

ReactDOM.render(<App />, document.getElementById('appNhy'));