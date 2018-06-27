import React from 'react'
import {StaggeredMotion, spring, presets} from 'react-motion'
import range from 'lodash/range'
import {Link} from 'react-router-dom'
import style from './motion-demo2.styl'

export default class MotionPage2 extends React.Component {
    state = {
        x: 250,
        y: 300
    }
    componentDidMount () {
        window.addEventListener('mousemove', this.handleMouseMove)
        window.addEventListener('touchmove', this.handleTouchMove)
    }
    handleMouseMove = ({pageX: x, pageY: y}) => {
        this.setState({x, y})
    }
    handleTouchMove = ({touches}) => {
        this.handleMouseMove(touches[0])
    }
    getStyles = (prevStyles) => {
        const endValue = prevStyles.map((_, i) => {
            return i === 0
                ? this.state
                : {
                    x: spring(prevStyles[i - 1].x, presets.gentle),
                    y: spring(prevStyles[i - 1].y, presets.gentle)
                }
        })
        return endValue
    }
    render () {
        return (
            <div>
                <Link to="/motion">回到动画列表</Link>
                <StaggeredMotion
                    defaultStyles = {range(6).map(() => ({x:0, y:0}))}
                    styles = {this.getStyles}>
                    {
                        balls =>
                            <div className={style.demo2}>
                                {
                                    balls.map(({x, y}, i) =>
                                        <div
                                            key={i}
                                            className={`${style['demo2-ball']} ${style[`ball-${i}`]}`}
                                            style={{
                                                transform: `translate3d(${x - 25}px, ${y - 25}px)`,
                                                zIndex: balls.length - i
                                            }}
                                        >

                                        </div>
                                    )
                                }
                            </div>
                    }
                </StaggeredMotion>
            </div>
        )
    }
}
