import React, {useState} from 'react'; 
import { Input, Button, Label, Form, Toggle } from '../styled-components';
import useForm from '../../custom-hooks/use-form'; 
import calculatePayment from '../../utils/calculate-payment';
import findById from '../../utils/find-payment';
import validate from './validation-rules';
import paymentData from '../../data/rates.json'
import PaymentSelect from './PaymentSelect.js'


const PaymentForm = (props) => {
    const {setPaymentValue} = props
    
    
    const defaultValues = {payment:"", income:"0.00"}
    const {values, handleChange, errors} = useForm({defaultValues, validate});
    const [isStudying, setIsStudying] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    
    const paymentChangeEffects = (payment) => {
        switch(payment.type) {
            case "AS": 
                setIsStudying(true);
                setShowToggle(false)
                break;
            case "YA":
                setIsStudying(false); 
                setShowToggle(true);
                break;
            default: 
                setIsStudying(false);
                setShowToggle(false);
        }
    }

    const handleToggle = (event) => {
        setIsStudying(!isStudying)
    }
    const handleSelect = (event) => {
        const payment = findById(event.target.selectedIndex, paymentData);
        paymentChangeEffects(payment)
        handleChange(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const payment = calculatePayment(values.income, values.payment, isStudying);
        setPaymentValue(`$${payment.toFixed(2)}`)
    }


    
    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor='income'>Income:</Label>
            <Input error={errors.income} id='income' type='text' name="income" value={values.income} onChange={handleChange}/>
            {errors.income && <p style={{color: "red"}}>{errors.income}</p>}
            {isStudying && <p style={{color: "green", fontSize:"1rem"}}>Income allowance increased when studying</p>}
            <Label htmlFor='payment'>Payment:</Label>
            <PaymentSelect options={paymentData} onChange={handleSelect} name="payment" />
            {errors.payment && <p style={{color: "red"}}>{errors.payment}</p>}
            {showToggle && <Label>Are you studying full time?</Label>}
            {showToggle && <Toggle checked={isStudying} handleToggle={handleToggle} />}
            <Button color="#ffb6c1" type='submit'>Calculate</Button>
        </Form>
    )
}; 
export default PaymentForm