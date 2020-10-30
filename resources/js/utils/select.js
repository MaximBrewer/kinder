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

const customStyles = {
    option: (provided, state) => ({
        backgroundColor: "#f3410e",
        color: "#ffffff",
        ...provided,
    }),
    valueContainer: (provided, state) => ({
        ...provided,
    }),
    menu: (provided, state) => ({
        color: "#424242",
        overflow: "hidden",
        ...provided,
    }),
    menuList: (provided, state) => ({
        ...provided,
    }),
    menuPortal: (provided, state) => ({
        zIndex: 4,
        position: "relative",
        ...provided,
    }),
    singleValue: (provided, state) => {
        const color = "#ffffff";
        const padding = "0";
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition, color, padding };
    },
    input: (provided, state) => ({
        color: "#ffffff",
        ...provided,
    }),
    control: (provided, state) => {
        const rest = {
            borderRadius: "100px",
            borderWidth: "3px",
            backgroundColor: "#f3410e",
            cursor: 'pointer',
            boxShadow: null,
            lineHeight: "32px",
            padding: "5px 22px",
            borderColor: "#ffffff",
            color: "#ffffff",
            '&:hover': {
                borderColor: "#dedede",
            },
        }
        return { ...provided, ...rest };
    },
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: "#ffffff",
        '&:hover': {
            color: "#ffffff",
        },
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: "#ffffff"
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
        theme={theme => ({
            ...theme,
            borderRadius: 30
        })} styles={customStyles} {...props} />);
}

export default Select;
