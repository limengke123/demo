import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions'

class AddTodo extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            value: ''
        }
        this.addItem = this.addItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        this.setState({
            value: e.target.value
        })
    }
    addItem (e) {
        /**
         * 这个e在这里打印不报错，在控制台打印就报错
         * */
        // console.log(e.key)
        if (e.key === 'Enter') {
            this.props.onAddItem(this.state.value)
            this.setState({
                value: ''
            })
        }
    }

    render () {
        const {value} = this.state
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} onKeyPress={this.addItem}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (text) => {
            console.log(text)
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)