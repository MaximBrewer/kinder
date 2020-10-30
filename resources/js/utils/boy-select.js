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

const options = () => window.App.data.boys.map((item, index) => ({ value: item.id, label: item.value }));

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
