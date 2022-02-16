import React, { useContext, useEffect, useState } from 'react';
import {API_KEY,API_URL} from '../API_Config/Config';
import BasketList from '../Components/BasketList';
import Cart from '../Components/Cart';
import ItemList from '../Components/ItemList';
import Loader from '../Components/Loader';
import { ContextProvider } from '../reducer/ContextProvider';
function Main(props) {

    const {isBasketShow,Fetching,loading} = useContext(ContextProvider)
 
   

 

    useEffect(()=>{
        fetch(API_URL,{
            headers:{
                Authorization:API_KEY
            }
        })
        .then((response) => response.json())
        .then(data=>Fetching(data.featured))
        //eslint-disable-next-line
    },[])

    return (
        <div className='content container'>
            <Cart  />
                {loading ? <Loader /> : (<ItemList   />)}
                {isBasketShow && <BasketList />}
        </div>
    );
}

export default Main;