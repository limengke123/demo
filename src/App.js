import React, { Component } from 'react';
import TodoApp from './components/todo-app'
import './asserts/App.css';
import './asserts/main.styl'

class App extends Component {
  render() {
    return (
      <div className="App">
          <TodoApp/>
      </div>
    );
  }
}

export default App;
