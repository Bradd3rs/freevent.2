import React, { Component } from 'react';
import styled from 'styled-components';

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

        const Content = styled.div`
            text-align: left;
            height: 150px;
            padding: 20px;
            background: #ff9800;
            background-image:url(${data.logo.original.url || ''});
            background-repeat:no-repeat;
            background-size:contain;
            background-position:center;
        `;
        return (
            <Container key={i} onClick={() => this.handleClick(data)}>
                <Content>
                    <h3>{data.name.text}</h3>
                    <h4>{data.start.local}</h4>
                </Content>
            </Container>
        );
    }
}

export default Event;

const Container = styled.li`
    margin: 20px;
    color: white;
    transform: translateY(0);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transition: box-shadow .2s, transform .2s;
    cursor: pointer;
    user-select: none;

    h1, h2, p {
        letter-spacing: .5px;
    }

    h1 {
        font-size: 1.2rem;
        line-height: 2rem;
        font-weight: 500;
    }

    @media(min-width: 780px) {
        width: 40%;
        display: inline-block;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
    }
    @media(min-width: 1024px) {
        width: 25%;
        display: inline-block;
    }
`;
