import './auth.css';
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios'; /* Include Axios */
import $ from "jquery"; /* Include Jquery */

/* Icons */
import {HiOutlineArrowRight} from 'react-icons/hi';
import {FiRefreshCcw} from 'react-icons/fi';
import {RxCross1} from 'react-icons/rx';

const Verifyotp = () => {

    /* Getting Params From URL */
    const queryParameters = new URLSearchParams(window.location.search);
    const id = queryParameters.get("id") /* User ID */
    const otp = queryParameters.get("otp") /* User OTP */

    /* Initialize The Variable */
    const [loading, setLoading] = useState(false); /* For Loading  */
    const [viewemail, setViewemail] = useState(''); /* For Email On Which We Send */
    const [successMessage, setSuccessMessage] = useState(""); /* Success Message */
    const [alertMessage, setAlertMessage] = useState(""); /* Alert Message */
    const [formData, setFormData] = useState({ /* For Form Data */
        id: id ? id : '',
        otp: otp ? otp : ''
    });
    
    useEffect(() => {

        /* If Id is Empty Then through User to login */
        if(!id){
            window.location.href = '/login';
        }

        /* Setting Email Address To View On Form */
        if(window.localStorage.getItem('email')){
            setViewemail(window.localStorage.getItem('email'));
        }
    }, []);

    /* Update Value With Change Event */
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:  event.target.value });
    };
  
    /* Submit Form */
    const verifyotpSubmit = (event) => {
      event.preventDefault();
      event.target.reset();
      setLoading(true);
      axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/verify-account`, formData)
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
          if(status_code == 400 || status_code == 403 || status_code == 404){
              setAlertMessage(error.response.data.message);
          }
      })
    };


    /* Resend OTP */
    const resendOTP = () => {
        timmer(); /* Call Timmer Function For Resending New OTP Code */
        setLoading(true);
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/resend-otp`, {
            id: id,
            callback_url: `${process.env.REACT_APP_BASE_URL}/verify-otp`,
        })
        .then((response) => {
            setLoading(false);
            if(response.data.status_code == 200){
                setSuccessMessage('New OTP has been sent to your email address');
            }
        })
        .catch((error) => {
            setLoading(false);
            let status_code = error.response.data.status_code;
            if(status_code == 403 || status_code == 404 || status_code == 429){
                setAlertMessage(error.response.data.message);
            }
        })
    };

    /* Resend Code Timmer */
    const timmer = () => {
        var time = 60;
        var flag = true;
        $("#resend").attr("disabled",true);
        if(flag){
            var timer = setInterval(function () {
                flag = false;
                if(time == 0){
                    $("#resend").removeAttr("disabled");
                    $("#resend .send-code-text").text("Send a new code");
                    clearInterval(timer);
                    time = 60;
                    flag = true;
                }else {
                    $("#resend .send-code-text").text("Resend code : "+time+"s");
                    time--;
                }
            },1000);
        }
    }

  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center verify-maxWidth">
            <div className='mb-4'>
                <Link to='/' className='navbar-brand'>deepline<span className='text-warning-1'>.</span>ai</Link>
            </div>
            <div className='form-title mb-4'>Verify your email</div>
            <div className='form-description mb-3 col-9 mx-auto'>
                Please check your inbox for a verification code to confirm your identity.
            </div>

            { successMessage ? (
            <div className="alert alert-success alert-dismissible fade show px-3 py-2 mx-5 form-description" role="alert">
                {successMessage}
                <button type="button" className="btn-close shadow-none top-50 end-0 translate-middle-y p-0 me-2" data-bs-dismiss="alert" aria-label="Close" style={{fontSize: 'x-small'}}></button>
            </div>
            ) : ''}
            { alertMessage ? (
                <div className="alert alert-danger alert-dismissible fade show px-3 py-2 mx-5 form-description" role="alert">
                    {alertMessage}
                    <button type="button" className="btn-close shadow-none top-50 end-0 translate-middle-y p-0 me-2" data-bs-dismiss="alert" aria-label="Close" style={{fontSize: 'x-small'}}></button>
                </div>
            ) : ''}

            <form onSubmit={verifyotpSubmit} className='auth-form col-10 mx-auto verify-form p-3'>
                <div className="row text-start mb-2">
                    <div className="col-12 mb-3">
                        <input type="hidden" name='id' onChange={handleChange} value={formData.id}/>
                        <div className="form-group">
                            <label className='form-label'>Code sent to <span className='verify-label-email'>{viewemail ? viewemail : ''}</span></label>
                            <input type="number" name='otp' onChange={handleChange} value={formData.otp} className='form-control shadow-none py-2' required/>
                        </div>
                    </div>
                </div>
                <button type='submit' className='btn auth-btn-blue-gradient-1 w-100'>
                    Verify
                    <HiOutlineArrowRight className='my-auto ms-2'/>
                </button>
            </form>
            <div className='verify-form-footer d-flex justify-content-center gap-3 mt-4'>
                <button className='btn p-0 border border-0' id="resend" onClick={resendOTP}>
                    <FiRefreshCcw className='mb-1 me-2'/>
                    <span className='send-code-text'>
                        Send a new code
                    </span>
                </button>
                <Link to='/login' className='btn p-0 border border-0'>
                    <RxCross1 className='mb-1 me-2'/>
                    Try a different email
                </Link>
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

export default Verifyotp