import React from 'react'
import { Checked, Unchecked } from '../utils/icons'


const Styles = {
    button: {
        background: 'transparent',
        border: '0',
        display: 'flex',
        outline: '0',
        cursor: 'pointer',
        textAlign: 'left'
    },

    check: {
        marginRight: '1rem'
    },

    content: {
        padding: ".8rem 0"
    }
}

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