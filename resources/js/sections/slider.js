import React, { useState, useRef, useEffect } from "react";
import {
    ArrowPrewSlider,
    ArrowNextSlider,
    ArrowPrew,
    ArrowNext
} from "../utils/icons";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Carousel = (props) => {

    const [state, setState] = useState({
        items: window.App.data.slides,
        active: 0,
        direction: ''
    })

    const generateItems = () => {
        var items = []
        var level
        console.log(state.active)
        for (var i = state.active - 2; i <= state.active; i++) {
            var index = i
            if (i < 0) {
                index = state.items.length + i
            } else if (i >= state.items.length) {
                index = i % state.items.length
            }
            level = state.active - i
            items.push(<Item key={index} item={state.items[index]} level={level} />)
        }
        return items
    }

    const moveLeft = () => {
        var newActive = state.active
        newActive--
        setState(prevState => ({
            ...prevState,
            active: newActive < 0 ? state.items.length - 1 : newActive,
            direction: 'left'
        }))
    }

    const moveRight = () => {
        var newActive = state.active
        setState(prevState => ({
            ...prevState,
            active: (newActive + 1) % state.items.length,
            direction: 'right'
        }))
    }

    return (
        <div id="carousel" className="noselect">
            <div className="arrow arrow-left mobile" onClick={moveLeft}><ArrowPrew /></div>
            <div className="arrow arrow-left" onClick={moveLeft}><ArrowPrewSlider /></div>
            <div style={{
                position: "absolute", width: "100%", height: "100%",
                right: "10%",
                left: "auto",
                borderRadius: "55px"
            }}>
                <ReactCSSTransitionGroup
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionName={state.direction}>
                    {generateItems()}
                </ReactCSSTransitionGroup>
            </div>
            <div className="arrow arrow-right mobile" onClick={moveRight}><ArrowNext /></div>
            <div className="arrow arrow-right" onClick={moveRight}><ArrowNextSlider /></div>
        </div >
    )
}

const Item = (props) => {

    const { item, level } = props;

    const [state, setState] = useState({
        level: level
    })

    return (
        <div className={'item level' + props.level} data-id={item.id}>
            <div className="top">
                <div className="circle-gradient">
                    <div>
                        <div>
                            <div className="avatar" style={{
                                backgroundImage: `url(${item.avatar})`
                            }}></div>
                        </div>
                    </div>
                </div>
                <div className="folname">
                    <div className="name">{item.name}</div>
                    <div className="followers">{item.followers}</div>
                </div>
                <div className="butwr">
                    <a href={item.link} className="blue-facebook" target="_blank">
                        <span className="hidden-sm">В профиль</span>
                        <span className="visible-sm">Перейти в профиль</span>
                    </a>
                </div>
            </div>
            <div className="photo" style={{ backgroundImage: `url(${item.photo})` }}></div>
        </div>
    )
}

export default Carousel;
