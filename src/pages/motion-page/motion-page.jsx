import React from 'react'
import {Link} from 'react-router-dom'
import {Motion, spring} from 'react-motion'
import style from './motion-page.styl'

export default class MotionPage extends React.Component {
    constructor () {
        super(...arguments)
        this.state = {
            open: false
        }
    }
    handleMouseDown = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleTouchStart = (e) => {
        e.preventDefault()
        this.handleMouseDown()
    }
    render () {
        return (
            <div>
                <Link to="/">回到首页</Link>
                <button
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleTouchStart}>
                    Toggle
                </button>
                <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
                    {
                        ({x}) =>
                            <div className={style.demo0}>
                                <div className={style["demo0-block"]} style={{
                                    transform: `translate3d(${x}px, 0, 0)`
                                }}>
                                </div>
                            </div>
                    }
                </Motion>
            </div>
        )
    }
}