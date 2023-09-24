const { paymentMethods } = require("../constants");

exports.getCurrentPaymentMethod = (paymentMethod) => {
    
    let payment = {}
    Object.keys(paymentMethods)
        .forEach(key => paymentMethod == key
            ? payment[key] = {
                value: key,
                label: paymentMethods[key],
                isSelected: true
            }
            : payment[key] = {
                value: key,
                label: paymentMethods[key],
                isSelected: false
            })
    return payment;
};