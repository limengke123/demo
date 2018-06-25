import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TodoApp from '../pages/todo-app'
import AsyncApp from '../pages/async-app'

const CustomRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={TodoApp} exact/>
            <Route path="/async" component={AsyncApp}/>
        </Switch>
    </BrowserRouter>
)

export default CustomRouter
