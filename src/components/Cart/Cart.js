import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;


    }

    let shhipping = 0;
    if (total > 35) {
        shhipping = 0;
    }
    else if (total > 15) {
        shhipping = 4.99;
    }
    else if (total > 0) {
        shhipping = 12.99
    }

    const tax = (total / 10);
    const grandTotal = (total + shhipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Item ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {shhipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total price: {grandTotal}</p>
            <br />
            {
                props.children
            }

        </div>
    );
};

export default Cart;