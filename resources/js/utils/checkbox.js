import React, { useState } from "react";
import { Checked, Unchecked } from "../utils/icons";

const Styles = {
    button: {},

    check: {
        marginRight: "1rem"
    },

    content: {
        padding: "0"
    }
};

export default function Button(props) {
    const icon = () => {
        return props.state[props.field] ? <Checked /> : <Unchecked />;
    };
    const toggle = event => {
        event.preventDefault();
        props.setState(prevState => {
            let errors = prevState.errors;
            if (!prevState[props.field]) {
                errors[props.field] = null;
            }
            let o = {
                ...prevState,
                errors
            };
            o[props.field] = !prevState[props.field]
            return o;
        });
    };
    return (
        <button
            style={Styles.button}
            onClick={toggle}
            className={`cehckboxButton`}
        >
            <div style={Styles.check}>{icon()}</div>
            <div style={Styles.content}>{props.children}</div>
        </button>
    );
}
