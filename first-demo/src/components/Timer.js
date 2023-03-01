import React from 'react';

function Timer (props) {
    const [seconds, setSeconds] = React.useState(props.seconds)

    setTimeout(() => {
        setSeconds((seconds) => seconds + 1);
    }, 1000)
    return (
        <div>
            <h2>Timer</h2>
            <p>Time: {seconds}s</p>
        </div>
    );
}

export default Timer;