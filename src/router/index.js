import React, {Fragment} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import TodoApp from '../pages/todo-app'
import AsyncApp from '../pages/async-app'
import ArticlePage from '../pages/article-page'
import MotionDemo1 from '../pages/motion-page/demo1/motion-demo1'
import MotionDemo2 from '../pages/motion-page/demo2/motion-demo2'

const MotionPage = ({match}) => (
    <Fragment>
        <Route path={`${match.url}/`} exact render={() => (
            <Fragment>
                <Link to={'/'}>回到首页</Link>
                <Link to={`${match.url}/demo1`}>demo1</Link>
                <Link to={`${match.url}/demo2`}>demo2</Link>
            </Fragment>
            )} />
        <Route path={`${match.url}/demo1`} component={MotionDemo1} exact/>
        <Route path={`${match.url}/demo2`} component={MotionDemo2}/>
    </Fragment>
)

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
