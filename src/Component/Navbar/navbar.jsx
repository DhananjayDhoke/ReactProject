
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { dologout, isLogin } from '../Auth/logininfo';
import { CheckedLogin } from '../Redux/Action';

export const Nabar = () => {

   const [login,setLogin]=useState(false);
   const {isLoggedIn} = useSelector(store=>store);

   
  
   const  navigate = useNavigate()
   const dispatch = useDispatch();

   useEffect(()=>{
       setLogin(isLogin());
   },[])

   console.log(isLoggedIn)
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <div className="container">
    
    <a className="navbar-brand me-2" href="/">
     
      <img src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
       height="50"
     
       loading="lazy"
      alt="Food logo" />
    </a>

  
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={()=>{
        {isLoggedIn?<useNavigate to={"/user/profile"}/>:alert("please login !!")}
      }}
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">Dashboard</a>
        </li>
      </ul>
    

      <div className="d-flex align-items-center">
       {isLoggedIn ?<> <button type="button" className="btn btn-link px-3 me-2" onClick={()=>{
                   dispatch(CheckedLogin())
                   dologout();
                   navigate("user/profile")
                   
                  }}>
        Logout
          
        </button>
       </>: <><button type="button" className="btn btn-link px-3 me-2">
        <Link to={"/login"}>Login</Link>
          
        </button><button type="button" className="btn btn-dark me-3">
       
       <Link to={"/register"} > Sign up for free</Link>
     </button></>}
        <a
         // className="btn btn-dark px-3"
          // href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          > <i className="fas fa-user-circle fa-2x"></i></a>
       
      </div>
    </div>
 
  </div>
 
</nav>

  )
}
