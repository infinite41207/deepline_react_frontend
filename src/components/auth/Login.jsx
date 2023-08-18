import './auth.css';
import React, { useState, useEffect, useCallback } from 'react';
import {Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha"; /* Include reCAPTCHA */
import axios from 'axios'; /* Include Axios */
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login'; /* Include React Social Login Package */

/* Icons */
import {FaGoogle} from 'react-icons/fa';
import {HiOutlineArrowRight} from 'react-icons/hi';

/* Images */
import Inputcheck from '../../assets/images/auth/input-verified-check.svg';

const Login = () => {
  /* Initialize Variables */
  const [verifyCaptcha, setVerifyCaptcha] = useState(false); /* For Captcha */
  const [loading, setLoading] = useState(false); /* For Loading  */
  const [alertMessage, setAlertMessage] = useState(""); /* Alert Message */
  const [emailValid, setEmailValid] = useState(false); /* For Valid Email */
  const [formData, setFormData] = useState({ /* For Form Data */
    email: '',
    callback_url: `${process.env.REACT_APP_BASE_URL}/verify-otp`, 
  });

  /* Verify ReCaptcha */
  const verifycaptchaFunction = (value) => {
    // console.log("Captcha value:", value);
    setVerifyCaptcha(true);
  }
  /* Expired Captcha */
  const expiredcaptchaFunction = () => {
    setVerifyCaptcha(false);
  }

  /* Email Input Validation Check  */
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  /* Update Value With Change Event */
  const handleChange = (event) => {

    /* Enable Or Disable Green Check On Email Input */
    if(!isValidEmail(event.target.value)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }

    /* Set Input Data */
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }; 

  /* Submit Form */
  const loginSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signin`, formData)
    .then((response) => {
        setLoading(false);
        if(response.data.status_code == 200){
          window.localStorage.removeItem('email');
          if(window.localStorage.getItem('email') === null){
              window.localStorage.setItem('email', formData.email);
          }
          window.location.href = `/verify-otp?id=${response.data.data.id}`;
        }
    })
    .catch((error) => {
        setLoading(false);
        let status_code = error.response.data.status_code;
        if(status_code == 401 || status_code == 403 || status_code == 404){
            setAlertMessage(error.response.data.message);
        }
    })
  };

  /* Submit Social Login Form */
  const socialLogin = (provider, id) => {
    setLoading(true);
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/social-signin`, {
      social_login_id: id,
      social_login_type: provider.toUpperCase()
    })
    .then((response) => {
        setLoading(false);
        if(response.data.status_code == 200){
          /* Set Session Data & Redirect To Dashboard */
          window.sessionStorage.removeItem('login_data');
          if(window.sessionStorage.getItem('login_data') === null){
              window.sessionStorage.setItem('login_data', JSON.stringify(response.data.data));
          }
          window.location.href = "/generate/amazon-product-description";
        }
    })
    .catch((error) => {
        setLoading(false);
        let status_code = error.response.data.status_code;
        if(status_code == 404){
            window.location.href = "/signup?type=social";
        }
        else if(status_code == 403){
          alert("Something went wrong!");
        }
    })
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center login-maxWidth">
            <div className='mb-4'>
                <a href='/' className='navbar-brand'>deepline<span className='text-warning-1'>.</span>ai</a>
            </div>
            <h2 className='form-title mb-4'>Sign in to your account</h2>
            <div>
                <LoginSocialGoogle
                  client_id={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}` || ''}
                  redirect_uri={process.env.REACT_APP_BASE_URL}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ provider, data }) => {
                    window.sessionStorage.removeItem('sociallogin_data');
                    if(window.sessionStorage.getItem('sociallogin_data') === null){
                      window.sessionStorage.setItem('sociallogin_data', JSON.stringify(data));
                    }
                    socialLogin(provider, data.sub);
                  }}
                  onReject={err => {
                    console.log(err);
                  }}
                >
                <button type='button' className='btn auth-btn-blue-gradient-1 w-100'>
                    <FaGoogle className='mb-1 me-2'/>
                    Continue with Google
                </button>
              </LoginSocialGoogle>
            </div>
            <div className='form-divider my-4 position-relative'>
                <div className='form-divider-text px-2 text-nowrap bg-white position-absolute top-50 start-50 translate-middle'>
                    Or sign in with your email
                </div>
            </div>

            { alertMessage ? (
                <div className="alert alert-danger alert-dismissible fade show px-3 py-2 form-description" role="alert">
                    {alertMessage}
                    <button type="button" className="btn-close shadow-none top-50 end-0 translate-middle-y p-0 me-2" data-bs-dismiss="alert" aria-label="Close" style={{fontSize: 'x-small'}}></button>
                </div>
            ) : ''}
           
            <form onSubmit={loginSubmit} className='auth-form'>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={verifycaptchaFunction}
                onExpired={expiredcaptchaFunction}
                className="mt-3 mb-2 d-flex justify-content-center"
              />
              <div className="row text-start mb-4">
                  <div className="col-12">
                      <div className="form-group position-relative">
                          <label className='form-label'>Email address</label>
                          <input type="email" name='email' onChange={handleChange} value={formData.email} className='form-control shadow-none py-2' required/>
                          {emailValid ? (
                            <img src={Inputcheck} alt="" width="30" className="position-absolute top-50 end-0 translate-middle-y verified-check" />
                          ) : ''}
                      </div>
                  </div>
              </div>
              <button type='submit' className='btn w-100 submit-button py-2' disabled={!verifyCaptcha}>
                  Continue with Email
                  <HiOutlineArrowRight className='my-auto ms-2'/>
              </button>
            </form>
            <div className='form-footer-text mt-4'>
                Don't have an account yet? <Link to="/signup">Get started here</Link>
            </div>
        </div>
      </div>

      { loading ? (
      <div className="deepline-loader">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      ) : ''}

    </>
  )
}

export default Login