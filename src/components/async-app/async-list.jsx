import React from 'react'
import {connect} from 'react-redux'
import AsyncItem from './async-item'

class AsyncList extends React.Component {
    render () {
        const {isFetching, items} = this.props.asyncData
        console.log(this.props.asyncData)
        const Fetching = () => (
            <div>
                is loading now !!!
            </div>
        )
        const List = ({listItems}) => (
            listItems.map(item => <AsyncItem item={item}/>)
        )
        return (
            <div>
                {
                    isFetching ?
                        <Fetching/> :
                        <List listItems={items}/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    asyncData: state["asyncData"]
})

export default connect(mapStateToProps)(AsyncList)
