import {useState} from 'react';
const useForm = (defaultValues) => {
    const [values, setValues] = useState(defaultValues);
    const handleChange = (event) => {
        setValues( values => {
            return {
                ...values,
                [event.target.name]: event.target.value
            }
        })
    }

    return [values, handleChange]
};

export default useForm