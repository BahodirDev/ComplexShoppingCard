export const AddItems=(item)=>({type:'SET_TO_BASKET',payload:item});
export const Remove=(itemId)=>({type:'REMOVE_FROM_BASKET',payload:{id:itemId}})
export const Toggle =()=>({type:'TOGGLE_BASKET'});
export const inc =(itemId)=>({type:'INCREMENT',payload:{id:itemId}});
export const dec =(itemId)=>({type:'DECREMENT',payload:{id:itemId}});
export const Fetch =(item)=>({type:'FETCHED',payload:item})
export const Loading=(str)=>({type:'LOADING',payload:str});

export const custom =(name)=>({type:'CUSTOM',payload:name});