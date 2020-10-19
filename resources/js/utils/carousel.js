import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { ArrowPrew, ArrowNext } from "./icons";

export default function Carousel(props) {
    const { items } = props;

    const sliderEl = useRef();

    const setting = {
        arrows: false,
        infinite: true,
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="hny-carousel">
            <a
                className="btn-control"
                onClick={() => {
                    sliderEl.current.slickPrev();
                }}
            >
                <ArrowPrew />
            </a>
            <div style={{ height: "320px", width: "246px", marginLeft: "20px", marginRight: "20px", borderRadius: "10px", backgroundColor: "#ffffff", padding: "10px" }}>
                <Slider {...setting} ref={sliderEl}>
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className={`img-wrapper`}>
                                <div className={`img`} style={{ backgroundImage: 'url(' + item.img + ')' }} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <a
                className="btn-control"
                onClick={() => {
                    sliderEl.current.slickNext();
                }}
            >
                <ArrowNext />
            </a>
        </div>
    );
}
