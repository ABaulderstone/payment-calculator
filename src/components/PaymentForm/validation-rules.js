const twoDecimalRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

const validate = (values) => {
    let errors = {}; 
    if(values.income === "") {
        errors.income = "Income field cannot be empty"
    }; 
    if(values.payment === "") {
        errors.payment = "Please select a payment"
    };
    
    if(twoDecimalRegex.test(values.income) === false) {
        errors.income = "Income field must be a postive number with up to two decimal places"

    }


    return errors;
}

export default validate

