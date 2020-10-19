import React from "react";
import Counter from '../utils/counter';

function Promo() {

    return (
        <div className="promo-hny">
            <div className="h1">волшебное приключение</div>
            <div className="h1"><span>с</span> <img src="/img/promo-logo.png" alt=""/></div>
            <div className="h1 h1-plus">Дедом Морозом</div>
            <Counter />
            <p>Оставьте заявку и подарите своему ребёнку волшебное видеоприключение с Дедом Морозом!</p>
        </div>
    );
}

export default Promo;
