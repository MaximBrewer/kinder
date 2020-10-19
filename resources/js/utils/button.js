import React from "react";

function Button(props) {
    const { style } = props;
    const styles = {
        borderRadius: "100px",
        borderWidth: "3px",
        backgroundColor: "#f3410e",
        cursor: 'pointer',
        boxShadow: null,
        lineHeight: "32px",
        padding: "11px 22px",
        borderColor: "#ffffff",
        borderStyle: "solid",
        color: "#ffffff",
        fontSize: "18px",
        textAlign: "center",
        '&:hover': {
            borderColor: "#dedede",
        },
        ...style
    }
    return (<div {...props} style={styles}>{props.text}</div>);
}

export default Button;
