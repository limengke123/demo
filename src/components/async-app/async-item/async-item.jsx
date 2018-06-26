import React from 'react'
import {withRouter} from 'react-router-dom'
import style from './async-item.styl'

const AsyncItem = ({item, history}) => {
    const jumpArticle = () => {
        history.push(`/async/${item.id}`)
    }
    return (
        <div className={style["async-item"]}>
            <span onClick={jumpArticle} className={style["item-title"]}>
                {item.title}
            </span>
        </div>
    )
}

export default withRouter(AsyncItem)
