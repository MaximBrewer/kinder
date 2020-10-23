
import React, { useState } from "react";

export function renderView({ style, ...props }) {
    const viewStyle = {
        paddingRight: 26
    };
    return (
        <div
            className="box"
            style={{ ...style, ...viewStyle }}
            {...props} />
    );
}

export function renderThumbHorizontal({ style, ...props }) {
    return (
        <div />
    );
}

export function renderTrackHorizontal({ style, ...props }) {
    return (
        <div />
    );
}

export function renderTrackVertical({ style, ...props }) {
    const trackStyle = {
        width: "16px",
        padding: "4px",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        position: "absolute",
        right: 0,
        bottom: 0,
        top: 0
    };
    return (
        <div
            style={{ ...style, ...trackStyle }}
            {...props} />
    );
}

export function renderThumbVertical({ style, ...props }) {
    const thumbStyle = {
        width: "8px",
        height: "102px",
        borderRadius: "4px",
        backgroundColor: "#E54C2E"
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props} />
    );
}