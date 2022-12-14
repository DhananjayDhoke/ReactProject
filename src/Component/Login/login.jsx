
import axios from 'axios';
import {
      MDBBtn,
      MDBContainer,
      MDBRow,
      MDBCol,
      MDBCard,
      MDBCardBody,
      MDBInput,
      MDBIcon
    }
    from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dologin } from '../Auth/logininfo';
import { CheckedLogin } from '../Redux/Action';
import "./login.css"

export const Login = ()=>{

    const [loginData, setLoginData] = useState({
        identifier: "",
        password: ""
    })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  


    const loginHandelChange = (e)=>{
        setLoginData({
            ...loginData,
            [e.target.id]:e.target.value
        })
    }

    const handelLogin = ()=>{
        if(loginData.identifier.trim()=="" || loginData.password.trim()==""){
            alert("Username or password must be required !!")
        }else{
          axios.post("https://uatservice.fodxpert.com/auth/local/",loginData).then((res)=>{
          
           dologin(res.data,()=>{
            dispatch(CheckedLogin())
               navigate("/user/profile")
           })

          }).catch(e=>{
             alert("invalid credential")
          })
        }
  
        
    }

    return (
        <MDBContainer fluid>
    
          <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
    
              <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
    
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
    
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='identifier' onChange={loginHandelChange} type='email' size="lg"/>
                  <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='password' onChange={loginHandelChange} type='password' size="lg"/>
    
                  <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handelLogin}>
                    Login
                  </MDBBtn>
    
                  <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='facebook-f' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='twitter' size="lg"/>
                    </MDBBtn>
    
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                      <MDBIcon fab icon='google' size="lg"/>
                    </MDBBtn>
                  </div>
    
                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
    
                  </div>
                </MDBCardBody>
              </MDBCard>
    
            </MDBCol>
          </MDBRow>
    
        </MDBContainer>
      );
}

