import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, stock, price} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p><small>By : {seller}</small></p>
                <h5>Price: $ {price}</h5>
                <p>Only {stock} left in stock - order soon.</p>
                <button onClick={() => props.handleAddProduct(props.product)} className="main-btn">
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;