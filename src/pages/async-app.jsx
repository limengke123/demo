import React from 'react'
import {Link} from 'react-router-dom'

import AsyncHeader from '../components/async-app/async-header'
import AsyncList from '../components/async-app/async-list'

const AsyncApp = () => (
    <div>
        <Link to="/">back to home page!!</Link>
        <AsyncHeader/>
        <AsyncList/>
    </div>
)

export default AsyncApp
