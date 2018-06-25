import React, { Component } from 'react';

class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick()
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.props.event.name.text}</p>
            </div>
        );
    }
}

export default EventDetail;