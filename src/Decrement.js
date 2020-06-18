import React from 'react';

const Decrement = ({ decrementCounter }) => {
    return <button style={decrementStyle} onClick={decrementCounter}>-</button>
}

const decrementStyle = {
    background:'red'
}

export default Decrement;