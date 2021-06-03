import React from 'react'; 
import { Input, Button, Label, Form } from './styled-components';

const PaymentForm = (props) => {
    return (
        <Form>
            <Label htmlFor='income'>Income:</Label>
            <Input id='income' type='number'/>
            <Label htmlFor='payment'>Payment:</Label>
            <Input id='payment' type='number'/>
            <Button color="#ffb6c1" type='submit'>Calculate</Button>
        </Form>
    )
}; 
export default PaymentForm