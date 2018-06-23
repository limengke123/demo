import React, {Component} from 'react'
import TodoItem from './todo-item'
import {connect} from 'react-redux'
import {toggoleTodo} from "../actions/index"

const filterTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(todo => todo.completed === true)
        case "SHOW_UNCOMPLETED":
            return todos.filter(todo => todo.completed === false)
        default:
            return todos
    }
}

class TodoList extends Component {
    render () {
        const {todos, onTodoClick, filter} = this.props
        const visibleTodos = filterTodos(todos, filter)
        return (
            <ul>
                {visibleTodos.map(todo => <TodoItem key={todo.id} completed={todo.completed} text={todo.text} onClick={() => onTodoClick(todo.id)}/>)}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
    filter: state.filter,
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => {
        dispatch(toggoleTodo(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)