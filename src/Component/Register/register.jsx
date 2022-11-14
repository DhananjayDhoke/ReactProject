
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = ()=>{
     const navigate =useNavigate()
    const [registerData, setRegisterData] = useState({
        party_package_type:"",
        name:"",
        company_name: "",
        email: "",
        phone_number: "",
        referral_code: "",
        state: "",
        country: ""
    })
   

    const handleChange = (e)=>{
        setRegisterData({
        ...registerData,
        [e.target.id]:e.target.value
     })
    }
    const handleSubmit = ()=>{
        axios.post("https://uatapi.fodxpert.com/api/memberRegistration/",registerData).then((res)=>{
              alert("User register sucsesfully");
              setRegisterData({
                party_package_type:"",
                name:"",
                company_name: "",
                email: "",
                phone_number: "",
                referral_code: "",
                state: "",
                country: ""
              })
              navigate("/login")

        }).catch(e=>{
            console.log(e)
        })
    }

    return (
        <MDBContainer fluid>
    
          <MDBCard  className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody >
              <MDBRow>
                <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
    
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Package Type' id='party_package_type' type='text' onChange={handleChange} className='w-100'/>
                  </div>

    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Your Name' id='name' type='text' onChange={handleChange} className='w-100'/>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Your Company Name' id='company_name' type='text' onChange={handleChange} className='w-100'/>
                  </div>

                  
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size='lg'/>
                    <MDBInput label='Your Email' id='email' type='email' onChange={handleChange}/>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="fas fa-mobile-alt me-3" size='lg'/>
                    <MDBInput label='Your Phone Number' id='phone_number' type='number' onChange={handleChange} className='w-100'/>
                  </div>
                    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size='lg'/>
                    <MDBInput label='Referal Code' id='referral_code' type='text' onChange={handleChange} className='w-100'/>
                  </div>
                    
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="fas fa-globe-americas me-3" size='lg'/>
                    <MDBInput label='Country' id='country' type='text' onChange={handleChange} className='w-100'/>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="far fa-flag me-3" size='lg'/>
                    <MDBInput label='State' id='state' type='text' onChange={handleChange} className='w-100'/>
                  </div>

    
                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size='lg'/>
                    <MDBInput label='Password' id='form3' type='password'/>
                  </div>
    
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size='lg'/>
                    <MDBInput label='Repeat your password' id='form4' type='password'/>
                  </div>
    
                  <div className='mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                  </div> */}
    
                  <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>
    
                </MDBCol>
    
                <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                </MDBCol>
    
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
}
