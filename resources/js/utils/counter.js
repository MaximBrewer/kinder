import { map } from "lodash";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function pad(num, size) {
    return ("000000" + num).substr(-size);
}

function Counter() {
    const [state, setState] = useState({
        current: pad(window.App.data.orders, 6),
        next: pad(window.App.data.orders, 6)
    });

    const tick = event => {
        tickTimeout(event.detail.cnt)
    };

    const tickTimeout = (cnt) => {
        setState(prevState => {
            let digits = prevState.current.split(""),
                newDigits = pad(cnt, 6).split("");
            for (let i in digits) {
                if (digits[i] != newDigits[i]) {
                    let el = document.getElementsByClassName("number-" + i)[0];
                    el.classList.add("flip");
                    setTimeout(function () {
                        el.classList.remove("flip");
                    }, 500);
                }
            }
            return {
                ...prevState,
                next: pad(cnt, 6)
            };
        });
        setTimeout(function () {
            setState(prevState => ({
                ...prevState,
                current: pad(cnt, 6)
            }));
        }, 500);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get("/api/orders/total")
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }, 10000)
        // window.addEventListener("refresh", tick);
        window.dispatchEvent(new CustomEvent("reactloaded"));
        return () => {
            clearInterval(interval)
            // window.removeEventListener("refresh", tick);
        };
    }, []);

    return (
        <div className="counter-khny">
            <div className="counter-inner">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <span key={index} className={`number number-` + index}>
                        <span className="primary">
                            <div className="before">
                                {state.current.split("")[index]}
                            </div>
                            <div className="after">
                                {state.next.split("")[index]}
                            </div>
                        </span>
                        <span className="secondary">
                            <div className="before">
                                {state.next.split("")[index]}
                            </div>
                            <div className="after">
                                {state.current.split("")[index]}
                            </div>
                        </span>
                    </span>
                ))}
            </div>
            <p>детей уже позвонили Деду Морозу</p>
        </div>
    );
}

export default Counter;
