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
        return props.checked ? <Checked /> : <Unchecked />;
    };
    const toggle = event => {
        event.preventDefault();
        props.setState(prevState => {
            let errors = prevState.errors;
            if (!prevState[props.field]) {
                errors[props.field] = null;
            }
            return {
                ...prevState,
                checked: !prevState[props.field],
                errors
            };
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
