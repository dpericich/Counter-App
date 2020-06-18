import React from 'react';
import CounterDisplay from './CounterDisplay';
import Increment from './Increment';
import Decrement from './Decrement';
import CounterReset from './CounterReset';

class App extends React.Component{

    state={counter: 0}

    incrementCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }

    decrementCounter = () => {
        this.setState({counter: this.state.counter - 1})
    }

    resetCounter = () => {
        this.setState({ counter: 0})
    }

    render() {
        return (
            <div className="counterApp">
                <div className="counterDisplay">
                    <CounterDisplay count={this.state.counter}/>
                </div>
                <div className="counterButtons">
                    <Increment incrementCounter={this.incrementCounter} />
                    <CounterReset resetCounter={this.resetCounter}/>
                    <Decrement decrementCounter={this.decrementCounter}/>
                </div>
            </div>
        )
    }
};

export default App;