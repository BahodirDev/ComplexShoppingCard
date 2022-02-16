import { createContext, useReducer } from "react";
import { toast } from "react-toastify";
import { AddItems, custom, dec, Fetch, inc, Loading, Remove, Toggle } from "./Actions";
import reducer from "./reducer";

export const ContextProvider = createContext('');

const initialState ={
    items:[],
    order:[],
    isBasketShow:false,
    loading:true,
}

export const CardProvider =({children})=>{
    const [value,dispatch] = useReducer(reducer, initialState)

    value.addToBasket =(item)=>{
        dispatch(AddItems(item))
        toast.info('Item added successfully')
    }
    value.removeBasketitem =(itemId)=>{
        dispatch(Remove(itemId))
        toast.error('Item deleted feom Basket successfully')
    }
    value.HandleBasket=()=>{
        dispatch(Toggle())
    }
    value.inc=(itemId)=>{
        dispatch(inc(itemId))
    }
    value.dec=(itemId)=>{
        dispatch(dec(itemId))
    }
    value.Fetching=(item)=>{
        dispatch(Fetch(item))
    }
    value.Loading=(str)=>{
        dispatch(Loading(str))
    }
    value.custom=(name)=>{
        dispatch(custom(name.length ? name : 'Siz formani to`ldirmadingiz'))
        toast.warning('Marka qator oxiridan chiqarildi')
    }

    return(
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
    )
}