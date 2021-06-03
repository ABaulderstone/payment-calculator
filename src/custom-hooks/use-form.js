import {useState} from 'react';
const useForm = (options) => {
    const {defaultValues, onSubmit} = options;
    const [values, setValues] = useState(defaultValues);
    const handleChange = (event) => {
        setValues( values => {
            return {
                ...values,
                [event.target.name]: event.target.value
            }
        })
    }; 
    const handleSubmit = (event) => {
        // if(event) {
        //     event.preventDefault()
        // }
        event && event.preventDefault();
        onSubmit();
    }

    return {values, handleChange, handleSubmit}
};

export default useForm