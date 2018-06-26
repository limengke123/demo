import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import TodoApp from '../pages/todo-app'
import AsyncApp from '../pages/async-app'
import ArticlePage from '../pages/article-page'
import MotionPage from '../pages/motion-page/motion-page'


const CustomRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={TodoApp} exact/>
            <Route path="/async" component={AsyncApp} exact/>
            <Route path="/async/:id" component={ArticlePage}/>
            <Route path="/motion" component={MotionPage}/>
        </div>
    </BrowserRouter>
)

export default CustomRouter
