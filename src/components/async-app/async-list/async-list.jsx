import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import AsyncItem from '../async-item/async-item'
import style from './async-list.styl'

class AsyncList extends React.Component {
    render () {
        const {asyncList} = this.props.asyncData
        const {isFetching, lists} = asyncList
        const Fetching = () => (
            <div>
                is loading now !!!
            </div>
        )
        const List = ({listItems}) => (
            listItems.map(item => <AsyncItem key={item.id} item={item} className="dsajk"/>)
        )
        return (
            <div className={style["async-list"]}>
                {
                    isFetching ?
                        <Fetching/> :
                        lists.length ?
                            <List listItems={lists}/> :
                            "列表中没有"
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    asyncData: state["asyncData"]
})

export default compose(
    withRouter,
    connect(mapStateToProps)
)(AsyncList)
