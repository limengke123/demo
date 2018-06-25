import React from 'react'
import {withRouter} from 'react-router-dom'

const ArticlePage = ({history}) => (
    <div>
        <button onClick={() => history.push('/async')}>返回</button>
        this is detail page!!!
    </div>
)

export default withRouter(ArticlePage)
