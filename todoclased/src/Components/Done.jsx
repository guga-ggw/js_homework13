import React, { Component } from 'react';

class Done extends Component {
  render() {
    const { tasks, rem } = this.props;

    return (
      <div className='done'>
        <h3>today's goals</h3>
        {tasks.map((item) => (
          <div className='todo_box' key={item.id}>
            <h1>{item.txt}</h1>
            <div className='buttons'>
              <button onClick={() => rem(item.id, true)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Done;