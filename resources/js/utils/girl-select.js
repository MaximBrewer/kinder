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

const options = () => window.App.data.girls.map((item, index) => ({ value: item.id, label: item.value }));

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
