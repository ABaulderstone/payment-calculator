const calculatePayment = (incomeInput, paymentInput, studying) => {
    console.log(studying);
    let income = Number(incomeInput);
    let payment = Number(paymentInput);
    const subPayment = studying ? calculateStudyPayment(income, payment) : calculateNoStudyPayment(income, payment);
    return subPayment;
    
};

function calculateStudyPayment(income, payment) {
    while (income > 0) {
        if(income > 524) {
            payment -= 0.6
        } else if (income > 437) {
            payment -= 0.5
        }
        if (payment < 0) {
            payment = 0;
            break;
        }
        income -= 1;
    }
    return payment;
    
}

function calculateNoStudyPayment(income, payment) {
    while (income > 0) {
        if(income > 256) {
            payment -= 0.6
        } else if (income > 150) {
            payment -= 0.5
        }
        if (payment < 0) {
            payment = 0;
            break;
        }
        income -= 1;
    }
    return payment;
}
export default calculatePayment;
