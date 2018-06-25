import React from 'react'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../actions/todo'

const FilterLink = ({active, onFilterClick, children}) => {
    if (active) {
        return (
            <span style={{color: "blue"}}>{children}</span>
        )
    }
    return (
        <a onClick={(e) => {
            e.preventDefault()
            onFilterClick()
        }} href="">{children}</a>
    )
}

const mapStateToProps = (state, ownProps) => ({
    filter: state.filter,
    active: state.filter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onFilterClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
