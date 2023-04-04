import { useState } from "react";

export function useForm(initialData, submitHandler) {
    const [values, setValues] = useState(initialData);

    function changeValues(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmitClick(e){
        e.preventDefault();

        submitHandler(values);
        setValues(initialData);
    }

    function editValues(newValues) {
        setValues(newValues)
    }

    return { values, changeValues, onSubmitClick, editValues };
}