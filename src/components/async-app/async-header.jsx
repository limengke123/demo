import React from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../../actions/async'

class AsyncHeader extends React.Component {
    render () {
        const {fetchData} = this.props
        return (
            <div>
                <button onClick={fetchData}>搜索</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: () => {
        dispatch(fetchPost())
    }
})

export default connect(null, mapDispatchToProps)(AsyncHeader)
