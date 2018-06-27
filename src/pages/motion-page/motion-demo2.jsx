import React from 'react'
import {Link} from 'react-router-dom'

export default class MotionPage2 extends React.Component {
    render () {
        return (
            <div>
                <Link to="/motion">回到动画列表</Link>
            </div>
        )
    }
}
