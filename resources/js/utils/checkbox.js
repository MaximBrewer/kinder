import React, { useState } from 'react'
import { Checked, Unchecked } from '../utils/icons'


const Styles = {
    button: {
        background: 'transparent',
        border: '0',
        display: 'flex',
        outline: '0',
        cursor: 'pointer',
        textAlign: 'left',
        margintop: '1rem',
        marginBottom: '1rem'
    },

    check: {
        marginRight: '1rem'
    },

    content: {
        padding: "0"
    }
}

export default function Button(props) {

    const icon = () => {
        return props.state.checked ? <Checked /> : <Unchecked />
    }
    const toggle = (event) => {
        event.preventDefault()
        props.setState(prevState => {
            let errors = prevState.errors;
            if(!prevState.checked) {
                errors.agree = null;
            }
            return {
                ...prevState,
                checked: !prevState.checked,
                errors
            }
        })
    }
    return (
        <button
            style={Styles.button}
            onClick={toggle}>
            <div style={Styles.check}>
                {icon()}
            </div>
            <div style={Styles.content}>
                {props.children}
            </div>
        </button>
    )
}