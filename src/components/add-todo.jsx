import React, {Component} from 'react'

export default class AddTodo extends Component {
    constructor () {
        super(...arguments)
        this.addItem = this.addItem.bind(this)
    }
    addItem (a) {
        console.log(a)
    }

    render () {
        return (
            <div>
                <input type="text" onKeyPress={this.addItem}/>
            </div>
        )
    }
}