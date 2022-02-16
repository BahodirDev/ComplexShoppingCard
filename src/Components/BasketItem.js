import React, { useContext } from 'react';
import { ContextProvider } from '../reducer/ContextProvider';

function BasketItem(props) {
    const{inc,dec,removeBasketitem} = useContext(ContextProvider)
    const {id,price,name,quantity} = props;
    return (
        <li key={id} className='collection-item'>
            {name} X{quantity} = {price * quantity} <b>$</b>
            <span className='secondary-content' >
            <>
                    <i className='material-icons  add' onClick={()=>inc(id)}>add_circle_outline</i>
                    <i className='material-icons  remove' onClick={()=>dec(id)}>remove_circle_outline</i>
            </>
                <i className='material-icons basket-delete' onClick={()=>removeBasketitem(id)}>delete_forever</i>
            </span>
        </li>
    );
}

export default BasketItem;