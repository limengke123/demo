import React from 'react'
import {Link} from 'react-router-dom'

import AsyncHeader from '../components/async-app/async-header'
import AsyncList from '../components/async-app/async-list'

class AsyncApp extends React.Component {
    constructor () {
        super(...arguments)
    }

    componentDidMount () {
        // const {history} = this.props
        console.log("dsa", this.props)
    }

    render () {
        return (
            <div>
                <Link to="/">back to home page!!</Link>
                <AsyncHeader/>
                <AsyncList/>
            </div>
        )
    }
}


export default AsyncApp
