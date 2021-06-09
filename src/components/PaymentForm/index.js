import React from 'react'; 
import { Input, Button, Label, Form } from '../styled-components';
import useForm from '../../custom-hooks/use-form'; 
import calculatePayment from '../../utils/calculate-payment';
import validate from './validation-rules';


const PaymentForm = (props) => {
    const {setPaymentValue} = props
    const onFormSubmit = () => {
        console.log(values);
        const payment = calculatePayment(values.income, values.payment);
        setPaymentValue(`$${payment.toFixed(2)}`);
    }
    
    const defaultValues = {payment:"0.00", income:"0.00"}
    const {values, handleSubmit, handleChange, errors} = useForm({defaultValues, onSubmit: onFormSubmit, validate});
    
    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor='income'>Income:</Label>
            <Input error={errors.income} id='income' type='text' name="income" value={values.income} onChange={handleChange}/>
            {errors.income && <p style={{color: "red"}}>{errors.income}</p>}
            <Label htmlFor='payment'>Payment:</Label>
            <Input error={errors.payment}  id='payment' type='text' name="payment" value={values.payment} onChange={handleChange}/>
            {errors.payment && <p style={{color: "red"}}>{errors.payment}</p>}
            <Button color="#ffb6c1" type='submit'>Calculate</Button>
        </Form>
    )
}; 
export default PaymentForm