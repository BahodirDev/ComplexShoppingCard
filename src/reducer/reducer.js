import logo from '../assets/fortnite.png';

function reducer(state, { type, payload }) {

    switch (type) {
        case 'SET_TO_BASKET':
            {
                const OrederIndex = state.order.findIndex(s => s.id === payload.id);
                let Massiv = null;
                if (OrederIndex < 0) {
                    const newMassiv = {
                        ...payload,
                        quantity: 1
                    }
                    Massiv = [...state.order, newMassiv]
                } else {
                    Massiv = state.order.map((el, index) => {
                        if (OrederIndex === index) {
                            const newQuantity = el.quantity + 1
                            return {
                                ...el,
                                quantity: newQuantity
                            }
                        } else {
                            return el
                        }
                    })
                }
                return {
                    ...state,
                    order: Massiv
                }
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(s => s.id !== payload.id)
            }
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
                
            }
        case 'INCREMENT':
            return{
                ...state,
                order:state.order.map((el)=>{
                    if(el.id===payload.id){
                    let newQuantity = el.quantity+1;
                    return{
                        ...el,
                        quantity:newQuantity
                    }
              
                    }else{
                        return el
                    }
                    
                })
            }  
        case 'DECREMENT':
            return{
                ...state,
                order:state.order.map((el)=>{
                    if(el.id===payload.id){
                        const newQuantity=el.quantity-1;
                        return{
                            ...el,
                            quantity:newQuantity >=0 ? newQuantity : 0
                        }
                    }else{
                        return el
                    }
                })
            }      
        case 'FETCHED':
            return{
                ...state,
                items:payload,
                loading:false
            }       
        case 'CUSTOM':
                {
                    const Name = {
                        name:payload,
                        full_background:'aaa',
                        description:'Foydalanuvchi',
                        id:new Date().getSeconds(),
                        releaseDate:new Date().getHours()
                    }
                    let Massiv = [...state.items,Name]
                    return{
                        ...state,
                        items:Massiv
                    }
                }
        default:
            return state
    }

}

export default reducer;