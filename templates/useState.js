import React from 'react'
import { useState } from 'react';

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

const Button = () => {
    const [count, setCount] = useState(0);

    // useState will keep track of state of each individual variable within each unique component for us
    function handleClick() {
        console.log('I was clicked');
        setCount(count + 1);
    }
    return (
        <div>
            <h2>These will update together</h2>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

export default Button
