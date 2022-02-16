import React, { useContext } from 'react';
import { ContextProvider } from '../reducer/ContextProvider';
import ItemDetails from './ItemDetails';
import Loader from './Loader';

function ItemList(props) {
    const {items = []} = useContext(ContextProvider)


    if(!items.length){
        return(
           <Loader />
        )
    }

    return (
        <div className='shop'>
                {items.map(item=>{
                    return(
                    <ItemDetails  key={item.id} {...item} />
                    )
                })}
        </div>
    );
}

export default ItemList;