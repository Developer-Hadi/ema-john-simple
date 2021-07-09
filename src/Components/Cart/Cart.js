import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // Total Price
    //const totalPrice = cart.reduce((total, product) => total + product.price,0);

    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    // Shiping cost
    let shipping =0;
    if (total>50) {
        shipping =0;
    }else if (total>35) {
        shipping = 4.99;
    }else if (total>0) {
        shipping =12.99;
    }

    const tax = total/10;
    const grandTotal = total+shipping+tax;
    
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Item ordered: {cart.length}</p>
            <p>Total Price : ${formatNumber(total)}</p>
            <p>Shipping Cost : ${formatNumber(shipping)}</p>
            <p>Tax & VAT : ${formatNumber(tax)} </p>
            <h3>Total Price : ${formatNumber(grandTotal)} </h3>
        </div>
    );
};

export default Cart;