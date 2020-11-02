import React, { useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Counter from "./utils/counter";
import Form from "./sections/form";
import Gifts from "./sections/gifts";
import Faq from "./sections/faq";

if (typeof Object.assign != "function") {
    Object.assign = function(target) {
        "use strict";
        if (target == null) {
            throw new TypeError("Cannot convert undefined or null to object");
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

window.axios = axios;

// Enable pusher logging - don't include this in production
// Pusher.logToConsole = true;

var pusher = new Pusher("c354da67c98f8f62d901", {
    cluster: "eu"
});

var channel = pusher.subscribe("kinder");

channel.bind("refresh", function({ count }) {
    window.dispatchEvent(
        new CustomEvent("refresh", {
            detail: { count }
        })
    );
});

ReactDOM.render(<Counter />, document.getElementById("counterEl"));
ReactDOM.render(<Form />, document.getElementById("formEl"));
ReactDOM.render(<Gifts />, document.getElementById("giftsEl"));
ReactDOM.render(<Faq />, document.getElementById("faqEl"));
