import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    border: ${props => props.error ? "1px solid red": "1px solid #dddddd"};
    font-size: 1.5rem;
`
const StyledOption = styled.option`
    font-size: 1.5rem;
`

const PaymentSelect = (props) => {
        const {options = [], ...rest} = props; 
        console.log(rest); 


    return (
        <StyledSelect {...rest}>
            {options.map( option => <StyledOption value={option.payment}>{option.name}</StyledOption>)}
        </StyledSelect>
    )
}

export default PaymentSelect;