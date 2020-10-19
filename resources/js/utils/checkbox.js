import React from 'react'
import { Checked, Unchecked } from '../utils/icons'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }

        this.icon = this.icon.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    icon() {
        return this.state.checked ? <Checked /> : <Unchecked />
    }

    toggle(event) {
        event.preventDefault()
        this.setState(function (state, props) {
            return {
                checked: !state.checked
            }
        })
    }

    render() {
        return (
            <button
                style={Styles.button}
                onClick={this.toggle}>
                <div style={Styles.check}>
                    {this.icon()}
                </div>

                <div style={Styles.content}>
                    {this.props.children}
                </div>
            </button>
        )
    }
}

const Styles = {
    button: {
        background: 'transparent',
        border: '0',
        marginBottom: '0.5rem',
        display: 'flex',
        outline: '0',
        marginRight: '0.5rem',
        cursor: 'pointer',
        textAlign: 'left'
    },

    check: {
        marginRight: '1rem'
    },

    content: {
        lineHeight: "40px"
    }
}