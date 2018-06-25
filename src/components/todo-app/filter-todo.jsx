import React, {Component} from 'react'
import FilterLink from './filter-link'

export default class FilterTodo extends Component {
    render () {
        return (
            <div>
                <FilterLink filter="SHOW_ALL">显示全部</FilterLink>
                <FilterLink filter="SHOW_COMPLETED">显示完成</FilterLink>
                <FilterLink filter="SHOW_UNCOMPLETED">显示未完成</FilterLink>
            </div>
        )
    }
}