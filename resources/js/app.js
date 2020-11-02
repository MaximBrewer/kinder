import React, { useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Counter from "./utils/counter";
import Form from "./sections/form";
import Gifts from "./sections/gifts";
import Faq from "./sections/faq";

/*! https://mths.be/scrollingelement v1.5.2 by @diegoperini & @mathias | MIT license */
if (!('scrollingElement' in document)) (function() {

	function computeStyle(element) {
		if (window.getComputedStyle) {
			// Support Firefox < 4 which throws on a single parameter.
			return getComputedStyle(element, null);
		}
		// Support Internet Explorer < 9.
		return element.currentStyle;
	}

	function isBodyElement(element) {
		// The `instanceof` check gives the correct result for e.g. `body` in a
		// non-HTML namespace.
		if (window.HTMLBodyElement) {
			return element instanceof HTMLBodyElement;
		}
		// Fall back to a `tagName` check for old browsers.
		return /body/i.test(element.tagName);
	}

	function getNextBodyElement(frameset) {
		// We use this function to be correct per spec in case `document.body` is
		// a `frameset` but there exists a later `body`. Since `document.body` is
		// a `frameset`, we know the root is an `html`, and there was no `body`
		// before the `frameset`, so we just need to look at siblings after the
		// `frameset`.
		var current = frameset;
		while (current = current.nextSibling) {
			if (current.nodeType == 1 && isBodyElement(current)) {
				return current;
			}
		}
		// No `body` found.
		return null;
	}

	// Note: standards mode / quirks mode can be toggled at runtime via
	// `document.write`.
	var isCompliantCached;
	var isCompliant = function() {
		var isStandardsMode = /^CSS1/.test(document.compatMode);
		if (!isStandardsMode) {
			// In quirks mode, the result is equivalent to the non-compliant
			// standards mode behavior.
			return false;
		}
		if (isCompliantCached === void 0) {
			// When called for the first time, check whether the browser is
			// standard-compliant, and cache the result.
			var iframe = document.createElement('iframe');
			iframe.style.height = '1px';
			(document.body || document.documentElement || document).appendChild(iframe);
			var doc = iframe.contentWindow.document;
			doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
			doc.close();
			isCompliantCached = doc.documentElement.scrollHeight > doc.body.scrollHeight;
			iframe.parentNode.removeChild(iframe);
		}
		return isCompliantCached;
	};

	function isRendered(style) {
		return style.display != 'none' && !(style.visibility == 'collapse' &&
			/^table-(.+-group|row|column)$/.test(style.display));
	}

	function isScrollable(body) {
		// A `body` element is scrollable if `body` and `html` both have
		// non-`visible` overflow and are both being rendered.
		var bodyStyle = computeStyle(body);
		var htmlStyle = computeStyle(document.documentElement);
		return bodyStyle.overflow != 'visible' && htmlStyle.overflow != 'visible' &&
			isRendered(bodyStyle) && isRendered(htmlStyle);
	}

	var scrollingElement = function() {
		if (isCompliant()) {
			return document.documentElement;
		}
		var body = document.body;
		// Note: `document.body` could be a `frameset` element, or `null`.
		// `tagName` is uppercase in HTML, but lowercase in XML.
		var isFrameset = body && !/body/i.test(body.tagName);
		body = isFrameset ? getNextBodyElement(body) : body;
		// If `body` is itself scrollable, it is not the `scrollingElement`.
		return body && isScrollable(body) ? null : body;
	};

	if (Object.defineProperty) {
		// Support modern browsers that lack a native implementation.
		Object.defineProperty(document, 'scrollingElement', {
			'get': scrollingElement
		});
	} else if (document.__defineGetter__) {
		// Support Firefox ≤ 3.6.9, Safari ≤ 4.1.3.
		document.__defineGetter__('scrollingElement', scrollingElement);
	} else {
		// IE ≤ 4 lacks `attachEvent`, so it only gets this one assignment. IE ≤ 7
		// gets it too, but the value is updated later (see `propertychange`).
		document.scrollingElement = scrollingElement();
		document.attachEvent && document.attachEvent('onpropertychange', function() {
			// This is for IE ≤ 7 only.
			// A `propertychange` event fires when `<body>` is parsed because
			// `document.activeElement` then changes.
			if (window.event.propertyName == 'activeElement') {
				document.scrollingElement = scrollingElement();
			}
		});
	}
}());

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
