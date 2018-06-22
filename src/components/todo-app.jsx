import React, {Component} from 'react'
import AddTodo from './add-todo'
import TodoList from './todo-list'
import FilterTodo from './filter-todo'

export default class ToodList extends Component {
    render () {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                <FilterTodo/>
            </div>
        )
    }
}
