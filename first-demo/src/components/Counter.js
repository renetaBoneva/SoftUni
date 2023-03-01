import { useState } from 'react';

function Counter () {
    const [points, setPoints] = useState(0)

    function incromentPoints() {
        setPoints((points) => points + 1);
    }

    function decrementPoints() {
        setPoints((points) => points - 1);
    }

    function resetPoints() {
        setPoints(0);
    }
    
    return (
        <div>
            <h2>Counter</h2>
            <p>{getTitle(points)} -&gt; {points}</p>
            {points > 0 ? <button onClick={decrementPoints}>-</button> : null}
            <button onClick={resetPoints}>0</button>
            <button onClick={incromentPoints}>+</button>
        </div>
    );
}

function getTitle(points) {
    switch (points) {
        case 0:
            return 'Zero points';
        case 1:
            return 'One point';
        case 2:
            return 'Two points';
        case 3:
            return 'Three points';
        case 4: 
            return 'Four points';
        case 5:
            return 'Five points';
        case 6:
            return 'Six points';
        default:
            return 'Multiple';
    }
}

export default Counter;