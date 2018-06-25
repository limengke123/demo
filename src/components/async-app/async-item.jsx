import React from 'react'
import {withRouter} from 'react-router-dom'

const AsyncItem = ({item, history}) => {
    const jumpArticle = () => {
        history.push(`/async/${item.id}`)
    }
    return (
        <div>
            <div onClick={jumpArticle}>
                {item.title}
            </div>
        </div>
    )
}

export default withRouter(AsyncItem)
