import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchDetailPost} from '../actions/async'
import {ArticleContent} from '../components/async-app/article-content'

class ArticlePage extends React.Component{
    componentWillMount () {
        this.props.fetchArticle()
    }
    componentWillUnmount () {
    }
    render () {
        const {history, articleData} = this.props
        const {isFetching, article} = articleData
        console.log(articleData)
        const Fetching = () => (
            <div>
                正在努力加载中...
            </div>
        )
        return (
            <div>
                <button onClick={() => history.push('/async')}>返回</button>
                <div>
                    {
                        isFetching ?
                            <Fetching/> :
                            <ArticleContent article={article}/>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    articleData: state["asyncData"]["asyncArticle"]
})

const mapDispatchToProps = (dispatch, ownProps) => {
    const {match} = ownProps
    return {
        fetchArticle: () => dispatch(fetchDetailPost(match.params.id))
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ArticlePage)
