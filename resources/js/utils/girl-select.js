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
    "Аврора",
    "Агата",
    "Аглая",
    "Аделина",
    "Адель",
    "Адиля",
    "Азалия",
    "Аидочка",
    "Аиша",
    "Айгуль",
    "Айша",
    "Аленочка",
    "Алечка",
    "Алима",
    "Алиночка",
    "Алисочка",
    "Алиюшечка",
    "Алия",
    "Аллочка",
    "Алсу",
    "Альбиночка",
    "Альфиюша",
    "Амелия",
    "Амина",
    "Амира",
    "Анаит",
    "Анжелика",
    "Анжелочка",
    "Анечка",
    "Ани",
    "Аниса",
    "Анфисочка",
    "Ариана",
    "Ариша",
    "Асма",
    "Ася",
    "Ая",
    "Белла",
    "Валенька",
    "Валида",
    "Варечка",
    "Василиса",
    "Васима",
    "Венера",
    "Вероника",
    "Верочка",
    "Викуля",
    "Виолетта",
    "Виточка",
    "Галенька",
    "Гаяне",
    "Гретта",
    "Гузель",
    "Гульнара",
    "Гуля",
    "Дамира",
    "Даниэла",
    "Даночка",
    "Дарина",
    "Дария",
    "Дашенька",
    "Дианочка",
    "Диля",
    "Диляра",
    "Динара",
    "Диночка",
    "Евдокия",
    "Евочка",
    "Есения",
    "Жанночка",
    "Женечка",
    "Заира",
    "Закия",
    "Залина",
    "Зара",
    "Зиля",
    "Зиночка",
    "Златочка",
    "Зоечка",
    "Зуличка",
    "Зухра",
    "Ильнура",
    "Инга",
    "Инесса",
    "Инночка",
    "Ирада",
    "Иришка",
    "Ия",
    "Камила",
    "Карима",
    "Кариночка",
    "Каролина",
    "Катенька",
    "Кира",
    "Кирочка",
    "Клава",
    "Кларочка",
    "Кристиночка",
    "Ксюшенька",
    "Лада",
    "Ладочка",
    "Ланочка",
    "Ларисочка",
    "Лейла",
    "Леночка",
    "Лерочка",
    "Лесечка",
    "Лианочка",
    "Лидочка",
    "Лиза",
    "Лика",
    "Лилечка",
    "Линочка",
    "Луиза",
    "Любочка",
    "Людочка",
    "Ляйсан",
    "Мадина",
    "Маечка",
    "Малика",
    "Марго",
    "Мариночка",
    "Марточка",
    "Марфуша",
    "Марьям",
    "Марьяна",
    "Машенька",
    "Мелисса",
    "Милана",
    "Милена",
    "Милочка",
    "Мирослава",
    "Мирочка",
    "Наденька",
    "Надира",
    "Наиля",
    "Нарима",
    "Настенька",
    "Наташенька",
    "Нелечка",
    "Нигара",
    "Никуля",
    "Ниночка",
    "Нонна",
    "Нурия",
    "Оксаночка",
    "Олеся",
    "Олечка",
    "Оливия",
    "Офелия",
    "Пелагея",
    "Поля",
    "Рада",
    "Радима",
    "Раечка",
    "Ралина",
    "Рашида",
    "Региночка",
    "Ренаточка",
    "Риммочка",
    "Риточка",
    "Розочка",
    "Руслана",
    "Рушаночка",
    "Сабина",
    "Сабиночка",
    "Садия",
    "Саида",
    "Салия",
    "Самира",
    "Сарра",
    "Сашенька",
    "Света",
    "Серафима",
    "Славочка",
    "Славочка",
    "Снежаночка",
    "Сонечка",
    "Софочка",
    "Станислава",
    "Стефания",
    "Сюзанночка",
    "Талия",
    "Танюша",
    "Тася",
    "Тая",
    "Тома",
    "Тонечка",
    "Улечка",
    "Фаиля",
    "Фаина",
    "Фатима",
    "Чулпан",
    "Шакира",
    "Шамиля",
    "Шурочка",
    "Эвелиночка",
    "Элечка",
    "Элиночка",
    "Эльзочка",
    "Эммочка",
    "Юленька",
    "Яночка",
    "Ярослава",
    "Ясмина",
    "Яся",
    "Внученька"
];

const options = () => names.map((item, index) => ({ value: item, label: item }));

const customStyles = {

    option: (provided, state) => ({
        backgroundColor: "#f3410e",
        color: colors.red,
        ...provided,
    }),
    valueContainer: (provided, state) => ({
        ...provided,
    }),
    menu: (provided, state) => ({
        color: "#424242",
        overflow: "hidden",
        color: colors.red,
        ...provided,
    }),
    menuList: (provided, state) => ({
        ...provided,
    }),
    menuPortal: (provided, state) => ({
        ...provided,
    }),
    singleValue: (provided, state) => {
        const color = colors.red;
        const padding = "0";
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition, color, padding };
    },
    input: (provided, state) => ({
        color: colors.red,
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
            borderColor: window.innerWidth >= 768 ? colors.red : colors.blue,
            color: colors.red,
            '&:hover': {
                borderColor: window.innerWidth >= 768 ? colors.red : colors.blue,
            },
        }
        return { ...provided, ...rest };
    },
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: colors.red,
        '&:hover': {
            color: colors.red,
        },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: colors.red
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        width: 0
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
    })
}


function Select(props) {
    return (<ReactSelect
        options={options()}
        placeholder={`Девочка`}
        theme={theme => ({
            ...theme,
            borderRadius: 30
        }
        )} styles={customStyles} {...props} />);
}

export default Select;
