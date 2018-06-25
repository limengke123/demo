import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import AsyncItem from './async-item'

class AsyncList extends React.Component {
    render () {
        const {isFetching, items} = this.props.asyncData
        const Fetching = () => (
            <div>
                is loading now !!!
            </div>
        )
        const List = ({listItems}) => (
            listItems.map(item => <AsyncItem key={item.id} item={item}/>)
        )
        return (
            <div>
                {
                    isFetching ?
                        <Fetching/> :
                        items.length ?
                            <List listItems={items}/> :
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
