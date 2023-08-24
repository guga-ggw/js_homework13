import React, { Component } from 'react';
import Done from './Components/Done';
import Todochild from './Components/Todochild';
import './App.css';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      text: '',
      completed: [],
    };
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleclick = () => {
    const newTodo = {
      id: Date.now(),
      txt: this.state.text,
    };
    this.setState((prevState) => ({
      todolist: [...prevState.todolist, newTodo],
      text: '',
    }));
  };

  completetask = (id, text) => {
    const completed = {
      id: id,
      txt: text,
    };

    this.setState(
      (prevState) => ({
        completed: [...prevState.completed, completed],
        todolist: prevState.todolist.filter((item) => item.id !== id),
      })
    );
  };

  deletetask = (id, cmp) => {
    if (!cmp) {
      this.setState((prevState) => ({
        todolist: prevState.todolist.filter((i) => i.id !== id),
      }));
    } else {
      this.setState((prevState) => ({
        completed: prevState.completed.filter((i) => i.id !== id),
      }));
    }
  };

  render() {
    const { text, todolist, completed } = this.state;

    return (
      <div className='app'>
        <div className='input'>
          <h2>type goal for today</h2>
          <input type='text' value={text} onChange={this.handleTextChange} />
          <button onClick={this.handleclick}>add</button>
        </div>
        <div className='borders'>
          <Todochild todos={todolist} rem={this.deletetask} complete={this.completetask} />
          <Done tasks={completed} rem={this.deletetask} />
        </div>
      </div>
    );
  }
}

export default MyComponent;