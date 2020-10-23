import React from "react";
import ReactSelect from 'react-select'

// clearIndicator
// group
// groupHeading
// loadingIndicator
// loadingMessage
// menu
// menuList
// menuPortal
// multiValue
// multiValueLabel
// multiValueRemove
// noOptionsMessage
const colors = {
    blue: "#0782F3",
    red: "#E54C2E",
    white: "#ffffff"
}


const names = [
    "Адам",
    "Адиль",
    "Азамат",
    "Азатик",
    "Айдарка",
    "Али",
    "Алим",
    "Альберт",
    "Аман",
    "Амин",
    "Амир",
    "Андрюша",
    "Анзор",
    "Антоша",
    "Арам",
    "Аркаша",
    "Армен",
    "Арсен",
    "Артур",
    "Аслан",
    "Астемыр",
    "Афоня",
    "Ахмат",
    "Ахмед",
    "Ашот",
    "Бахтияр",
    "Богдаша",
    "Боречка",
    "Булат",
    "Вадимка",
    "Валерочка",
    "Валечка",
    "Ванечка",
    "Васечка",
    "Вильдан",
    "Виталик",
    "Витечка",
    "Владик",
    "Вовочка",
    "Гаврюша",
    "Гарри",
    "Гамлет",
    "Гаяз",
    "Геночка",
    "Герман",
    "Глебушка",
    "Гордеюшка",
    "Гошенька",
    "Гришенька",
    "Давид",
    "Дамир",
    "Данечка",
    "Данияр",
    "Дарим",
    "Даян",
    "Демид",
    "Дениска",
    "Джамиль",
    "Димочка",
    "Добрыня",
    "Дорджи",
    "Дорофеюшка",
    "Евсеюшка",
    "Егорка",
    "Елисеюшка",
    "Ёся",
    "Ефимка",
    "Ждан",
    "Женечка",
    "Захарчик",
    "Ибрагим",
    "Игорь",
    "Ильдан",
    "Ильдарушка",
    "Ильнур",
    "Ильхам",
    "Илюшка",
    "Имран",
    "Иналь",
    "Ислам",
    "Камиль",
    "Кантемир",
    "Карим",
    "Кеша",
    "Кирюша",
    "Климушка",
    "Коленька",
    "Костенька",
    "Кузя",
    "Левушка",
    "Лёня",
    "Лешенька",
    "Магомед",
    "Максимка",
    "Маратик",
    "Марк",
    "Матвей",
    "Мирон",
    "Мишенька",
    "Муслим",
    "Назарчик",
    "Наиль",
    "Никитка",
    "Олежка",
    "Пашенька",
    "Петечка",
    "Платоша",
    "Потап",
    "Прохор",
    "Радик",
    "Рамиль",
    "Рашитик",
    "Ренатик",
    "Риналь",
    "Роберт",
    "Родион",
    "Ромочка",
    "Руслан",
    "Рустамчик",
    "Рустэмчик",
    "Сава",
    "Самвел",
    "Санечка",
    "Святослав",
    "Сева",
    "Сема",
    "Сеня",
    "Сереженька",
    "Славик",
    "Стасик",
    "Степочка",
    "Султанчик",
    "Тарасик",
    "Тарлан",
    "Тема",
    "Тигран",
    "Тима",
    "Тимур",
    "Толечка",
    "Трофимушка",
    "Фарид",
    "Федечка",
    "Филя",
    "Хабиб",
    "Харитоша",
    "Шамиль",
    "Эдгарс",
    "Эдик",
    "Эльдар",
    "Эрнест",
    "Юлик",
    "Юрочка",
    "Явдат",
    "Ян",
    "Ярик",
    "Яша",
    "Внучок",
    "Дружок"
];

const options = () => names.map((item, index) => ({ value: item, label: item }));

const customStyles = {

    option: (provided, state) => ({
        backgroundColor: "#f3410e",
        color: colors.blue,
        ...provided,
    }),
    valueContainer: (provided, state) => ({
        ...provided,
    }),
    menu: (provided, state) => ({
        color: "#424242",
        overflow: "hidden",
        ...provided,
        color: colors.blue,
    }),
    menuList: (provided, state) => ({
        ...provided,
    }),
    menuPortal: (provided, state) => ({
        ...provided,
    }),
    singleValue: (provided, state) => {
        const color = colors.blue;
        const padding = "0";
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition, color, padding };
    },
    input: (provided, state) => ({
        color: colors.blue,
        ...provided,
    }),
    control: (provided, state) => {
        const rest = {
            borderRadius: "30px",
            borderWidth: "3px",
            backgroundColor: colors.white,
            cursor: 'pointer',
            boxShadow: null,
            lineHeight: "32px",
            padding: "5px 22px",
            borderColor: window.innerWidth >= 768 ? colors.blue : colors.blue,
            color: colors.blue,
            '&:hover': {
                borderColor: window.innerWidth >= 768 ? colors.blue : colors.blue,
            },
        }
        return { ...provided, ...rest };
    },
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: colors.blue,
        '&:hover': {
            color: colors.blue,
        },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: colors.blue
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        color: colors.blue,
        width: 0
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        color: colors.blue,
    })
}


function Select(props) {
    return (<ReactSelect
        options={options()}
        placeholder={`Мальчик`}
        theme={theme => ({
            ...theme,
            borderRadius: 30,
            color: colors.blue
        }
        )} styles={customStyles} {...props} />);
}

export default Select;
