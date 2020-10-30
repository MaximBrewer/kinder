import { map } from "lodash";
import React, { useState, useEffect, useRef } from "react";

function Counter() {
    const [state, setState] = useState("000000");

    const tick = () => {
        setState(prevState => {
            let digits = prevState.split(""),
                newDigits = prevState * 1 + 1;

            if (newDigits < 10) newDigits = ("00000" + newDigits).split("");
            else if (newDigits < 100)
                newDigits = ("0000" + newDigits).split("");
            else if (newDigits < 1000)
                newDigits = ("000" + newDigits).split("");
            else if (newDigits < 10000)
                newDigits = ("00" + newDigits).split("");
            else if (newDigits < 100000)
                newDigits = ("0" + newDigits).split("");

            console.log(newDigits);

            for (let i in digits) {
                if (digits[i] != newDigits[i]) {
                    let el = document.getElementsByClassName("number-" + i)[0];
                    el.classList.add("flip");
                    setTimeout(function() {
                        el.classList.remove("flip");
                    }, 500);
                }
            }
            return prevState * 1 + "";
        });
        setTimeout(function() {
            setState(prevState => {
                let d = prevState * 1 + 1;
                if (d < 10) d = ("00000" + d);
                else if (d < 100) d = ("0000" + d);
                else if (d < 1000) d = ("000" + d);
                else if (d < 10000) d = ("00" + d);
                else if (d < 100000) d = ("0" + d);
                return d;
            });
        }, 500);
    };

    useEffect(() => {
        // const interval = setInterval(() => {
        //     tick();
        // }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="counter-khny">
            <div className="counter-inner">
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <span key={index} className={`number number-` + index}>
                        <span className="primary">
                            <div className="before">
                                {state.split("")[index] * 1}
                            </div>
                            <div className="after">
                                {state.split("")[index] * 1 + 1 < 10
                                    ? state.split("")[index] * 1 + 1
                                    : 0}
                            </div>
                        </span>
                        <span className="secondary">
                            <div className="before">
                                {state.split("")[index] * 1 + 1 < 10
                                    ? state.split("")[index] * 1 + 1
                                    : 0}
                            </div>
                            <div className="after">
                                {state.split("")[index] * 1}
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
