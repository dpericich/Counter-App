import React from 'react';

const Increment = ({ incrementCounter }) => {
    return <button style={incrementStyle} onClick={incrementCounter}>+</button>
}

const incrementStyle = {
    background:"green",
}

export default Increment;