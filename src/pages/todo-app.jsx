import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AddTodo from '../components/todo-app/add-todo/add-todo'
import TodoList from '../components/todo-app/todo-list'
import FilterTodo from '../components/todo-app/filter-todo'

export default class TodoApp extends Component {
    render () {
        return (
            <div>
                <Link to="/async">to async app</Link>
                <Link to="/motion">to motion app</Link>
                <AddTodo/>
                <TodoList/>
                <FilterTodo/>
            </div>
        )
    }
}
