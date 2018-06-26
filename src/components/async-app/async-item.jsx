import React from 'react'
import {withRouter} from 'react-router-dom'

const AsyncItem = ({item, history}) => {
    const jumpArticle = () => {
        history.push(`/async/${item.id}`)
    }
    return (
        <div>
            <span onClick={jumpArticle}>
                {item.title}
            </span>
        </div>
    )
}

export default withRouter(AsyncItem)
