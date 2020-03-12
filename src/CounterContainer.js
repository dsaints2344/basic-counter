// Intentionally left blank.

import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterContainer extends Component {
    state = {
        count: 0
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    };

    reset = () => {
        this.setState({
            count: 0
        })
    }

    render() {
        const { count } = this.state;
        return (
            <Counter
                count={count}
                onDecrement={this.handleDecrement} onIncrement={this.handleIncrement}
                onReset={this.reset} />
        );
    }
}
