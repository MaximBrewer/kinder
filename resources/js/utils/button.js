import React from "react";

function Button(props) {
    const { style } = props;
    const styles = {
        ...style
    }
    return (<div {...props} style={styles} className={'nhy-btn'}>{props.text}</div>);
}

export default Button;
