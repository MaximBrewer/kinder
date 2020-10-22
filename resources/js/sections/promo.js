import React from "react";
import Counter from '../utils/counter';
import Button from '../utils/button';
import { size } from "lodash";

function Promo(props) {
    const { toForm } = props;
    return (
        <div className="promo-hny">
            <div className="h1">волшебное приключение</div>
            <div className="h1"><span>с</span> <img src="/img/promo-logo.png" alt="" /></div>
            <div className="h1 h1-plus">Дедом Морозом</div>
            <Counter />
            <p>Оставьте заявку и подарите ребёнку волшебное видеоприключение с&nbsp;Дедушкой Морозом!!</p>
            <Button text={`ПОДАРИТЬ ПРИКЛЮЧЕНИЕ`} onClick={toForm} />
        </div>
    );
}

export default Promo;
