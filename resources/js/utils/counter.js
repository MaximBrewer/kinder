import { map } from "lodash";
import React, { useState, useEffect, useRef } from "react";

function Counter() {

    const [state, setState] = useState('500000');

    useEffect(() => {
        const interval = setInterval(() => {
            setState(prevState => {
                let
                    digits = prevState.split(''),
                    newDigits = ((prevState * 1 + 1) + '').split('');

                for (let i in digits) {
                    if (digits[i] != newDigits[i]) {
                        let el = document.getElementsByClassName('number-' + i)[0];
                        el.classList.add("flip");
                        setTimeout(function () {
                            el.classList.remove("flip");
                        }, 500);
                    }
                }
                return (prevState * 1) + '';
            })
            setTimeout(function () {
                setState(prevState => {
                    return (prevState * 1 + 1) + '';
                })
            }, 500);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter-khny">
            <div className="counter-inner">
                {
                    [0, 1, 2, 3, 4, 5].map((item, index) => (
                        <span key={index} className={`number number-` + index}>
                            <span className="primary">
                                <div className="before">{state.split('')[index] * 1}</div>
                                <div className="after">{state.split('')[index] * 1 + 1 < 10 ? state.split('')[index] * 1 + 1 : 0}</div>
                            </span>
                            <span className="secondary">
                                <div className="before">{state.split('')[index] * 1 + 1 < 10 ? state.split('')[index] * 1 + 1 : 0}</div>
                                <div className="after">{state.split('')[index] * 1}</div>
                            </span>
                        </span>
                    ))
                }
            </div>
            <p>детей уже позвонили Деду Морозу</p>
        </div>
    );
}

export default Counter;
