import React, { Component } from 'react';

class Todochild extends Component {
  render() {
    const { todos, rem, complete } = this.props;

    return (
      <div className='to_do'>
        <h3>today's goals</h3>
        {todos.map((item) => (
          <div className='todo_box' key={item.id}>
            <h1>{item.txt}</h1>
            <div className='buttons'>
              <button onClick={() => complete(item.id, item.txt)}>Done</button>
              <button onClick={() => rem(item.id, false)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Todochild;