import React, { Component } from 'react';
import "../App.css"
import ConsoleObserver from './ConsoleObserver';
import HistoryObserver from "./HistoryObserver"
import ElementObserver from "./ElementObserver"

class Model extends Component {
    state = {
        color: "red",
        number: 0,
        observers: []
    };
    constructor(props) {
        super(props);
        this.observer2 = []
        this.increment = this.increment.bind(this)
        this.notify = this.notify.bind(this)
        this.addObserver = this.addObserver.bind(this)
    }
    increment() {
        const colors = ["red", "green", "orange", "blue"]

        this.setState({ number: this.state.number + 1 })
        this.setState({ color: colors[Math.floor(Math.random() * colors.length)] })

        this.notify();
    }

    addObserver(o) {
        this.observer2.push(o);
        this.setState({ observers : this.observer2})
    }

    notify() {
        for (let o of this.state.observers) {
            o.update(this)
        }
    }
    componentWillMount(){
        const co = new ConsoleObserver();
        const ho = new HistoryObserver();
        const eo = new ElementObserver();

        this.addObserver(co);
        this.addObserver(ho);
        this.addObserver(eo);
    }

    render() {

        return (
            <div>
                <div className="square" id="observer1" style={{backgroundColor: this.state.color}}>{this.state.number}</div>
                <hr />
                <button type="button" onClick={this.increment.bind()}>Increment</button>
            </div>
        )
    }
}
export default Model