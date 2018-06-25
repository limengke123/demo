import React, { Component } from 'react'
import {Provider} from 'react-redux'
import CustomRouter from './router'
import store from './store'
import './asserts/index.styl'


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <CustomRouter/>
        </Provider>
    )
  }
}

export default App
