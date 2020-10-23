import React from "react";

function Button(props) {
    const { style } = props;
    const styles = {
        ...style
    }
    return (<button {...props} style={styles} className={'nhy-btn'}>{props.text}</button>);
}

export default Button;
