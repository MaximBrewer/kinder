import React, { useState, useRef, useEffect } from "react";
import { ArrowPrewSlider as ArrowPrew, ArrowNextSlider as ArrowNext } from "../utils/icons";
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
        for (var i = state.active - 2; i < state.active + 3; i++) {
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
            <div className="arrow arrow-left" onClick={moveLeft}><ArrowPrew /></div>
            <ReactCSSTransitionGroup
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionName={state.direction}>
                {generateItems()}
            </ReactCSSTransitionGroup>
            <div className="arrow arrow-right" onClick={moveRight}><ArrowNext /></div>
        </div>
    )
}

const Item = (props) => {

    const { item, level } = props;

    const [state, setState] = useState({
        level: level
    })

    return (
        <div className={'item level' + props.level}
            style={{
                backgroundImage: `url(${item.photo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
        </div>
    )
}

export default Carousel;
