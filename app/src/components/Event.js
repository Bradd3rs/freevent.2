import React from 'react';

const Event = ({data, i}) => (
    
    <li key={i}>
        <h3>{data.name.text}</h3>
        <h4>{data.start.local}</h4>
    </li>
)

export default Event;