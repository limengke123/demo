import React, {Fragment} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import TodoApp from '../pages/todo-app'
import AsyncApp from '../pages/async-app'
import ArticlePage from '../pages/article-page'
import MotionDemo1 from '../pages/motion-page/demo1/motion-demo1'
import MotionDemo2 from '../pages/motion-page/demo2/motion-demo2'
import MotionDemo3 from '../pages/motion-page/demo3/motion-demo3'
import MotionDemo4 from '../pages/motion-page/demo4/motion-demo4'
import MotionDemo5 from '../pages/motion-page/demo5/motion-demo5'

const MotionPage = ({match}) => (
    <Fragment>
        <Route path={`${match.url}/`} exact render={() => (
            <Fragment>
                <Link to={'/'}>回到首页</Link>
                <Link to={`${match.url}/demo1`}>demo1</Link>
                <Link to={`${match.url}/demo2`}>demo2</Link>
                <Link to={`${match.url}/demo3`}>demo3</Link>
                <Link to={`${match.url}/demo4`}>demo4</Link>
                <Link to={`${match.url}/demo5`}>demo5</Link>
            </Fragment>
            )} />
        <Route path={`${match.url}/demo1`} component={MotionDemo1}/>
        <Route path={`${match.url}/demo2`} component={MotionDemo2}/>
        <Route path={`${match.url}/demo3`} component={MotionDemo3}/>
        <Route path={`${match.url}/demo4`} component={MotionDemo4}/>
        <Route path={`${match.url}/demo5`} component={MotionDemo5}/>
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
