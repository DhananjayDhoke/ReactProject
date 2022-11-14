import { json } from "react-router-dom"


export const isLogin = ()=>{

    let data = localStorage.getItem("data")
    if(data!==null){
       return true;    
    }
    else{
      return false;
    }
} 

export const dologin = (data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next();
}




export const dologout = ()=>{
    localStorage.removeItem("data")
}


export const getCurrentUser = ()=>{
    if(isLogin()){
        return JSON.parse(localStorage.getItem("data"))
    }
    else{

        return false;
    }
}
