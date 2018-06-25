import React, { Component } from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(data) {
        this.props.onClick(data)
    }
    render() {
        let data = this.props.data,
            i = this.props.i;
        return (
            <li key={i} onClick={() => this.handleClick(data)}>
                <h3>{data.name.text}</h3>
                <h4>{data.start.local}</h4>
            </li>
        );
    }
}

export default Event;