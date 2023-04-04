import { useState } from "react";


export function useLocalStorage(key, initalData) {
    const [state, setState] = useState(() => {
        const persistedSerializedState = localStorage.getItem(key);

        if (persistedSerializedState) {
            const persistedState = JSON.parse(persistedSerializedState);

            return persistedState;
        }

        return initalData;
    })

    function setLocalStorageState(value) {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }
    return [
        state,
        setLocalStorageState
    ]
}