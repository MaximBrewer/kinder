import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Counter from "./utils/counter";
import Form from "./sections/form";
import Gifts from "./sections/gifts";
import Faq from "./sections/faq";
window.axios = axios;


ReactDOM.render(<Counter />, document.getElementById('counterEl'));
ReactDOM.render(<Form />, document.getElementById('formEl'));
ReactDOM.render(<Gifts />, document.getElementById('giftsEl'));
ReactDOM.render(<Faq />, document.getElementById('faqEl'));