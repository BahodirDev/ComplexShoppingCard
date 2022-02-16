import React, { useContext } from 'react';
import { ContextProvider } from '../reducer/ContextProvider';

function ItemDetails(props) {

    const {addToBasket}= useContext(ContextProvider);

    const { id, name, description, releaseDate, full_background, price } = props;

    return (
        <div className="card" key={id}>
            {/* <h2></h2> */}
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}</span>
                <p className='fs20 color'>{description}</p>
            </div>
                <i className='right' style={{fontSize:'14px',color:'green',opacity:'0.6'}}>Made on {releaseDate}</i>
            <div className="card-action">
                <button className='btn' onClick={()=>addToBasket({id,price,name})}>Buy</button>
                <span className="card-title grey-text text-darken-4 right">{price}$</span>
            </div>
        </div>
    );
}

export default ItemDetails;