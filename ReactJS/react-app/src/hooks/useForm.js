import { useState } from "react";

export function useForm(initialData, submitHandler) {
    const [values, setValues] = useState(initialData);

    function changeValues(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmitClick(e){
        e.preventDefault();

        submitHandler(values);
    }

    return { values, changeValues, onSubmitClick };
}