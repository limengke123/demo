import React from 'react'
import style from './todo-item.styl'

const TodoItem = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        className={style["todo-item"]}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)

export default TodoItem
