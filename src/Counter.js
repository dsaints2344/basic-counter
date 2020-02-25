import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 54
    };
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  render() {
    const {count} = this.state;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement} className="full-width">Increment</button>
        <button onClick={() => {}} className="full-width">Decrement</button>
        <button onClick={() => {}} className="full-width">Reset</button>
      </section>
    );
  }
}
