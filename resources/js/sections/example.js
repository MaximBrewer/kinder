import React from "react";
import Button from '../utils/button'

function Example(props) {

    return (
        <div className="example-hny">
            <div className="h1" style={{ maxWidth: "110rem" }}>Такое волшебное поздравление получит ваш ребёнок!</div>
            <div style={{ maxWidth: "700px" }}>
                <div style={{ width: "100%", height: "0", position: "relative", paddingTop: "56.25%", marginBottom: "36px" }}>
                    <iframe id="ytplayer" type="text/html" style={{ width: "100%", height: "100%", position: "absolute", top: "0", left: "0" }} src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" frameBorder="0" />
                </div>
                <div className={`text-center`}><Button onClick={props.toForm} text={`заполнить заявку`} style={{ display: "inline-block", padding: "11px 42px", fontSize: "20px", textTransform: "uppercase" }} /></div>
            </div>
        </div>
    );
}

export default Example;
