import { LOGIN } from "./Action"


export const initialState = {
    isLoggedIn : false,

}


export const LoginReducer = (store,{type})=>{
    switch(type){
      case  LOGIN:
        return {...store, isLoggedIn:!store.isLoggedIn}
        
        default :
        return store;
    }
}

