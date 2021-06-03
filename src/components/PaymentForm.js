import React from 'react'; 
import { Input, Button, Label, Form } from './styled-components';
import useForm from '../custom-hooks/use-form'

const PaymentForm = (props) => {
    const onFormSubmit = () => console.log(values);
    const defaultValues = {payment:0, income:0}
    const {values, handleSubmit, handleChange} = useForm({defaultValues, onSubmit: onFormSubmit});
    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor='income'>Income:</Label>
            <Input id='income' type='number' name="income" value={values.income} onChange={handleChange}/>
            <Label htmlFor='payment'>Payment:</Label>
            <Input id='payment' type='number' name="payment" value={values.payment} onChange={handleChange}/>
            <Button color="#ffb6c1" type='submit'>Calculate</Button>
        </Form>
    )
}; 
export default PaymentForm