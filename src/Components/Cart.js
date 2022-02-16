import React, { useContext } from 'react';
import { ContextProvider } from '../reducer/ContextProvider';

function Cart(props) {
    const {order,HandleBasket} = useContext(ContextProvider)
    const {quantity = order.length} = props;
    return (
        <div className='cart blue darken-4 ' onClick={HandleBasket}>
                <i className="material-icons cart-icon">add_shopping_cart</i>
                {quantity ? <span className='quantity-cart'>{quantity}</span> : null}
        </div>
    );
}

export default Cart;