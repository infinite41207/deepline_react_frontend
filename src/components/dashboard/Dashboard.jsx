import './dashboard.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'; /* Include Axios */
import $ from 'jquery'; /* Include Jquery */

/* Components  */
import Progressbar from './Progressbar'; /* Include Progresline */

/* Components Against Template Section */
import Productdescription from './texttype/Productdescription';
import Amazonproductdescription from './texttype/Amazonproductdescription';
import Residentialrealestate from './texttype/Residentialrealestate';
import Blogpost from './texttype/Blogpost';
import Paragraphrewritting from './texttype/Paragraphrewritting';
import Email from './texttype/Email';
import Instagramcaption from './texttype/Instagramcaption';
import Facebookad from './texttype/Facebookad';
import Meta from './texttype/Meta';
import Document from './texttype/Document';

import Notfound404 from '../errorscreens/Notfound404'; /* Include Page Not Found */

/* Icons */
import {FiPlusCircle} from 'react-icons/fi';
import {RxCross2} from 'react-icons/rx';
import {HiOutlineArrowRight} from 'react-icons/hi';

/* Images */
import Comment from '../../assets/images/dashboard/output-section/comment.svg';
import Copy from '../../assets/images/dashboard/output-section/copy.svg';

/* Social Icon With Change State */
/* No Fill */
import Star from '../../assets/images/dashboard/output-section/favourite.svg';
import Like from '../../assets/images/dashboard/output-section/like.svg';
import Unlike from '../../assets/images/dashboard/output-section/unlike.svg';
/* With Fill */
import Starfill from '../../assets/images/dashboard/output-section/favouritefill.svg';
import Likefill from '../../assets/images/dashboard/output-section/likefill.svg';
import Unlikefill from '../../assets/images/dashboard/output-section/unlikefill.svg';



import TemplateIcon from '../../assets/images/dashboard/template-window.svg';
import RightBullet from '../../assets/images/dashboard/sidenav-bullet.svg';
import BetaIcon from '../../assets/images/dashboard/beta.svg';
import CreaditIcon from '../../assets/images/dashboard/credit-icons.svg';
import Settings from '../../assets/images/dashboard/settings.svg';
import Help from '../../assets/images/dashboard/help.svg';
import History from '../../assets/images/dashboard/history.svg';
import Billing from '../../assets/images/dashboard/billing.svg';
import Usage from '../../assets/images/dashboard/usage.svg';
import Invite from '../../assets/images/dashboard/invite.svg';
import Useravatar from '../../assets/images/dashboard/user-avatar.svg';
import Userdropdown from '../../assets/images/dashboard/user-dropdown.svg';

/* Voice Tone Images */
import Friendly from '../../assets/images/dashboard/voice-tone-selector/friendly.svg';
import Luxury from '../../assets/images/dashboard/voice-tone-selector/luxury.svg';
import Relaxed from '../../assets/images/dashboard/voice-tone-selector/relaxed.svg';
import Professional from '../../assets/images/dashboard/voice-tone-selector/professional.svg';
import Bold from '../../assets/images/dashboard/voice-tone-selector/bold.svg';
import Adventurous from '../../assets/images/dashboard/voice-tone-selector/adventurous.svg';
import Witty from '../../assets/images/dashboard/voice-tone-selector/witty.svg';
import Persuasive from '../../assets/images/dashboard/voice-tone-selector/persuasive.svg';

const Dashboard = () => {

    /* Set States */
    const navigate = useNavigate(); 

    /* Initialize Variables */
    const [loading, setLoading] = useState(false); /* For Loading  */
    const [sessionUserToken, setSessionUserToken] = useState(''); /* For Session Token */
    const [sessionUserData, setSessionUserData] = useState(''); /* For Session User Data */
    const [productnameCount, setProductnameCount] = useState(0); /* For Counting Product Name */
    const [keywordsCount, setKeywordsCount] = useState(0); /* For Counting Key Words */
    const [formData, setFormData] = useState({  /* For Form Data */
        input_text_id: '',
        text: '',
        text_type: 'Amazon Product Description',
        keywords: '',
        tone_type: '',
        characters: '',
        number_of_outputs: 1
    });
    const [allmodels, setAllmodels] = useState([]); /* For Fetching Output Data */
    const [selectTone, setSelectTone] = useState(""); /* For Selecting Voice Tone */
    const voicetoneData = [
        {
            value: 'Friendly',
            text: 'Friendly',
            icon: <img src={Friendly} alt='' width="15" height="15"/>
        },
        {
            value: 'Luxury',
            text: 'Luxury',
            icon: <img src={Luxury} alt='' width="15" height="15"/>
        },
        {
            value: 'Relaxed',
            text: 'Relaxed',
            icon:<img src={Relaxed} alt='' width="15" height="15"/>
        },
        {
            value: 'Professional',
            text: 'Professional',
            icon: <img src={Professional} alt='' width="15" height="15"/>
        },
        {
            value: 'Bold',
            text: 'Bold',
            icon: <img src={Bold} alt='' width="15" height="15"/>
        },
        {
            value: 'Adventurous',
            text: 'Adventurous',
            icon: <img src={Adventurous} alt='' width="15" height="15"/>
        },
        {
            value: 'Witty',
            text: 'Witty',
            icon: <img src={Witty} alt='' width="15" height="15"/>
        },
        {
            value: 'Persuasive',
            text: 'Persuasive',
            icon: <img src={Persuasive} alt='' width="15" height="15"/>
        },
    ];
    const [error404, setError404] = useState(false); /* For Error 404  */
    const [newoutputCount, setNewoutputCount] = useState(0); /* For Toggling New Output Color State */

    /* Update The Characters Length */
    const num_characters = (value) => {
        setFormData({...formData, characters: value  });
    }

    /* Update Voice Tone Value On Changing From Select Option */
    const handleToneChange =(event) =>{
        setSelectTone(event);
        setFormData({...formData, tone_type: event.value  });
    }

    /* Update Value With Change Event */
    const handleChange = (event) => {

        /* Set Input Length Counter Value */
        if(event.target.name == 'text'){
            setProductnameCount(event.target.value.length);
        }
        if(event.target.name == 'keywords'){
            setKeywordsCount(event.target.value.length);
        }

        /* Set Input Data */
        setFormData({...formData, [event.target.name]:  event.target.value });
    };

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${sessionUserToken}`
        },
        withCredentials: false,
    };

    /* Submit Form To Generate Text */
    const generateText = (event) => {
        event.preventDefault();
        setLoading(true);  
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/ai/generate-text`, formData, config)
        .then((response) => {
            setLoading(false);
            if(response.data.status_code == 200){

                if(response.data.data){
                    
                    setNewoutputCount(formData.number_of_outputs);

                    response.data.data.map((elem, index)=>{
                        elem.showLoading=false;
                    })

                    setAllmodels([...response.data.data, ...allmodels]);
                    setFormData({...formData, input_text_id: response.data.header_data.input_text_id  });
                }
            }
        })
        .catch((error) => {
            setLoading(false);
            if(error){
                console.log(error);
                // alert("Something went wrong!");
            }
        })
    };


    const send_output_request = (generated_data)=>{

        axios.put(`${process.env.REACT_APP_API_BASE_URL}/ai/update-output-record/${generated_data._id}`, {
            generated_text: generated_data.generated_text,
            isFavourite: generated_data.isFavourite,
            isLiked: generated_data.isLiked,
            isUnliked: generated_data.isUnliked
        }, config)
        .then((response) => {
            setLoading(false);
            if(response.data.status_code == 200){
                // console.log(response);
            }
        })
        .catch((error) => {
            setLoading(false);
            if(error){
                console.log(error);
                // alert("Something went wrong!");
            }
        })

    }

    var [textTimeout, setTextTimeout]= useState("");

    /* Update Output Record */
    const update_output_data = (e, index, type) => {

        e.preventDefault();
        
        let generated_data = "";

        /* Here we update the value of changed textarea */
        setAllmodels(allmodels.map((e2,i2)=>{
            if(i2 == index){
                e2.generated_text = e.target.value;
                generated_data = e2;
            }
            return e2;
        }))
        
        if(type=="text"){
    
            //-------------Maintianing the textarea height-------------
            /*
            if(!e.target.value){
                e.target.style.height = "186px";
            }
            
            else if (e.target.scrollHeight > e.target.clientHeight){
                e.target.style.height = e.target.scrollHeight + 'px';
            }
            */
            //---End-------Maintianing the textarea height-------------

            
            //-------------Sending Request to update text-------------
            if(textTimeout){
                clearTimeout(textTimeout);
            }

            setTextTimeout(setTimeout(()=>{
                send_output_request(generated_data);
            }, 500));
            //---End-------Sending Request to update text-------------
        }

        else{
            /* Set the Favourite Button Status */
            if(type == 'favourite'){
                if(generated_data.isFavourite == true){
                    generated_data.isFavourite = false;
                }
                else{
                    generated_data.isFavourite = true;
                }
            }

            /* Set the Like Button Status */
            if(type == 'like'){
                if(generated_data.isLiked == true ){
                    generated_data.isLiked = false;
                }
                else{
                    generated_data.isLiked = true;
                    generated_data.isUnliked = false;
                }
            }

            /* Set the Unlike Button Status */
            if(type == 'unlike'){
                if(generated_data.isUnliked == true){
                    generated_data.isUnliked = false;
                }
                else{
                    generated_data.isUnliked = true;
                    generated_data.isLiked = false;
                }
            }

            // const arr_data = [...allmodels];
            // arr_data[index][e.target.name] = e.target.value;
            // console.log(arr_data[index][e.target.name]);
            // setAllmodels(arr_data);

            send_output_request(generated_data);
        }
    }

    /* Reset All Form Inputs */
    const resetForm = () => {
        setFormData({...formData, input_text_id: "", text: "", keywords: "", tone_type: "", characters: 300, number_of_outputs: 1 });
    }

    /* Logout Function */
    const logout = () => {
        window.sessionStorage.removeItem('login_data');
        window.localStorage.removeItem('email');
        window.location.href = '/login';
    }

    useEffect(() => {
        /* Getting Session Data */
        if(window.sessionStorage.getItem('login_data') !== null){
            var login_data = JSON.parse(window.sessionStorage.getItem('login_data'));
            setSessionUserToken(login_data.token);
            setSessionUserData(login_data.user);
        }
    }, []);

    /* Set Page Content According To Clicked Tab For Sidenav Template */
    const allocateTemplateData = (pageurl) =>  {
        navigate(pageurl);
        var str = pageurl.split('/').pop();
        var new_string = str.replaceAll('-', ' ');
        if(new_string == 'amazon product description'){
            setFormData({...formData, text_type: 'Amazon Product Description'});
        }
        else if(new_string == 'product description'){
            setFormData({...formData, text_type: 'Product Description'});
        }
        else if(new_string == 'blog post'){
            setFormData({...formData, text_type: 'Blog Post'});
        }
        else if(new_string == 'paragraph re writting'){
            setFormData({...formData, text_type: 'Paragraph Re-Writting'});
        }
        else if(new_string == 'e mail'){
            setFormData({...formData, text_type: 'E-mail'});
        }
        else if(new_string == 'instagram caption'){
            setFormData({...formData, text_type: 'Instagram Caption'});
        }
        else if(new_string == 'facebook ad'){
            setFormData({...formData, text_type: 'Facebook Ad'});
        }
        else if(new_string == 'meta'){
            setFormData({...formData, text_type: 'Meta'});
        }
        else if(new_string == 'document'){
            setFormData({...formData, text_type: 'Document'});
        }
        else if(new_string == 'residential real estate'){
            setFormData({...formData, text_type: 'Residential Real Estate'});
        }
        else{
            setError404(true);
        }
        setFormData({...formData, input_text_id: "", text: "", keywords: "", tone_type: "", characters: 300, number_of_outputs: 1 });
    }

    /* On Load Screen Call This Function */
    useEffect(() => {
        allocateTemplateData(window.location.pathname);
    }, []);

    /* Disable Right Click In App */
    useEffect(() => {
        const handleContextmenu = e => {
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextmenu)
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu)
        }
    }, [])

 
    /* Time Ago Function */
    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " yr ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " m ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " d ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hr ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " min ago";
        }
        return "Just now";
    }


    function copyToClipBoard(e){
        
        const mainDiv = $(e.target).closest(".outputMainDiv");

        const textToCopy = $("textarea", mainDiv).val();

        $("textarea", mainDiv).select();

        document.execCommand( 'copy' );

    }

    return (
        <>
            {error404 ? (
                <Notfound404/>
            ) : 
            (
            <div className='container-fluid p-0 dashboard-section'>
                <div className="d-flex">
                    <div className="col side-nav">
                        <div className='mx-5 my-2'>
                            <a className="navbar-brand" href="/">deepline<span className='text-warning-1'>.</span>ai</a>
                        </div>

                        {/* New Button Section */}
                        <div className='px-3'>
                            <button className='btn plus-btn w-100 py-2'>
                                <div className='d-flex justify-content-start'>
                                    <FiPlusCircle className='mx-3 my-auto fs-5'/>
                                    <div>
                                        New Project
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className='px-3'>                   

                            {/* Templates Section */}
                            <div className='my-2'>
                                <div className="accordion border border-0 shadow-none" id="templates">
                                    <div className="accordion-item border border-0 shadow-none">
                                        <div className="accordion-header">
                                            <button className="accordion-button shadow-none ps-4 py-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id="headingOne">
                                                <img src={TemplateIcon} alt="" className='ms-2' width="25" height="25"/>
                                                <div className='sidenav-heading-1 ms-2'>
                                                    Templates
                                                </div>
                                            </button>
                                        </div>
                                        <div id="collapseOne" className="accordion-collapse collapse show overflow-auto theme-scrollbar" aria-labelledby="headingOne" data-bs-parent="#templates" style={{maxHeight: '30vh' }}>
                                            <div className="accordion-body ps-3 py-0">
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/amazon-product-description')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Amazon Descriptions
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/product-description')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Product Descriptions
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/residential-real-estate')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Real Estate Listings
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/blog-post')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Blog Posts
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/paragraph-re-writting')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Paragraph Re-Writting
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/e-mail')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        E-mail Engaging Letters
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/instagram-caption')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Instagram Captions
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/facebook-ad')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Facebook Ads
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/meta')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Meta Descriptions
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0' onClick={() => allocateTemplateData('/generate/document')}>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Documents
                                                    </div>
                                                </button>
                                                {/* <button className='btn d-flex border border-0 pt-0'>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        Chat AI
                                                    </div>
                                                </button>
                                                <button className='btn d-flex border border-0 pt-0'>
                                                    <div>
                                                        <img src={RightBullet} alt="" height="12"/>
                                                    </div>
                                                    <div className='sidenav-subheading-1 mt-1 ms-3 text-nowrap'>
                                                        <div className='d-flex'>
                                                            <div>
                                                                Image AI
                                                            </div>
                                                            <div className='ms-4'>
                                                                <img src={BetaIcon} alt="" width="45"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Section */}
                            <div className='credit-section my-2 p-3 bg-white'>
                                <div className='d-flex credit-heading-1'>
                                    <div className=''>
                                        <img src={CreaditIcon} alt="" />
                                    </div>
                                    <div className='ms-2'>
                                        Credits
                                    </div>
                                </div>
                                <div className='my-3'>
                                    <Progressbar/>
                                </div>
                                <div className='progress-status'>
                                    30% of plan credits used
                                </div>
                                <div className='progress-link'>
                                    <a href="#">Get more credits</a>
                                </div>
                            </div>

                            {/* Links Section */}
                            <div className='links-section px-3'>
                                <a href='#' className='d-flex mt-3 mb-2 text-decoration-none'>
                                    <img src={Settings} alt="" width="15"/>
                                    <div className='ms-2'>Settings</div>
                                </a>
                                <a href='#' className='d-flex mb-2 text-decoration-none'>
                                    <img src={Help} alt="" width="15"/>
                                    <div className='ms-2'>Help</div>
                                </a>
                                <a href='#' className='d-flex mb-2 text-decoration-none'>
                                    <img src={History} alt="" width="15"/>
                                    <div className='ms-2'>All outputs History</div>
                                </a>
                                <a href='#' className='d-flex mb-2 text-decoration-none'>
                                    <img src={Billing} alt="" width="15"/>
                                    <div className='ms-2'>Billing</div>
                                </a>
                                <a href='#' className='d-flex mb-2 text-decoration-none'>
                                    <img src={Usage} alt="" width="15"/>
                                    <div className='ms-2'>Usage</div>
                                </a>
                            </div>

                            {/* User Section */}
                            <div className='user-section'>
                                <button className='invitation-btn bg-white d-flex justify-content-center w-100 p-2 mt-3'>
                                    <div>
                                        Invite Team Members
                                    </div>
                                    <img src={Invite} alt="" />
                                </button>


                                <div className="dropdown">
                                    <button className="btn dropdown-toggle d-flex justify-content-between shadow-none border border-0 w-100 my-3 px-3 d-flex justify-content-start user-head" type="button" id="user" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className='d-flex justify-content-start w-75'>
                                            <img src={Useravatar} alt="" />
                                            <div className='ms-2 text-truncate' title={sessionUserData.fname+' '+sessionUserData.lname}>
                                                {sessionUserData.fname+' '+sessionUserData.lname}
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Userdropdown} alt=""/>
                                        </div>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="user">
                                        <li><button className="btn btn-sm dropdown-item" onClick={logout}>Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row m-0 w-100'>
                        <div className='col-12 col-md-6 p-0 bg-white br-1px-link-water'>
                            <form onSubmit={generateText} className="d-flex flex-column justify-content-between vh-100">
                                <TemplateContent
                                    onChange_handleChange={handleChange}
                                    value_formData={formData}
                                    onChange_handleToneChange={handleToneChange}
                                    onSelectCharacters={num_characters}
                                    selectToneValue={selectTone}
                                    selectToneOption={voicetoneData}
                                    productnameCount={productnameCount}
                                    keywordsCount={keywordsCount}
                                />
                                <div className='bg-white px-4 py-3 bt-1px-link-water'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='my-auto'>
                                            <button type='reset' onClick={resetForm} className='btn clear-btn' disabled={loading}>
                                                <RxCross2 className='me-1'/>
                                                Clear inputs
                                            </button>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <div className="form-group position-relative">
                                                <input type="number" onChange={handleChange} name='number_of_outputs' value={formData.number_of_outputs} className='form-control repeat-times-input p-3' disabled={loading}/>
                                                <div className='position-absolute top-50 start-0 translate-middle-y x-symbol'>x</div>
                                            </div>
                                            <div>
                                                <button type='submit' className='btn db-submit-btn p-3' disabled={loading}>
                                                    Generate
                                                    <HiOutlineArrowRight className='ms-2'/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='col-12 col-md-6 p-0'>
                            <div className='bg-white db-heading-1 px-4 py-3 db-header bb-1px-link-water d-flex gap-3'>
                                <div>
                                    <button className='btn new-btn shadow-none'>New Outputs</button>
                                </div>
                                <div>
                                    <button className='btn history-btn shadow-none'>History</button>
                                </div>
                            </div>
                            <div className='db-heading-2 px-4 pt-3'>
                                Edit Note
                            </div>
                            <div className='row m-0 px-4 py-3 overflow-auto theme-scrollbar' style={{maxHeight: '80vh'}}>
                                <div className="col-12 p-0">
                                    
                                    {loading && (
                                        Array.from({ length: formData.number_of_outputs }, (v, i)=>{
                                            return (<div className="output-content output-content-bg-green text-center py-5 mb-4" key={i}>
                                                <div className="spinner-border" role="status" style={{width: '3rem', height: '3rem',  color: '#5401AF'}}>
                                                    <span className="sr-only visually-hidden">Loading...</span>
                                                </div>
                                            </div>)
                                        })
                                    )}

                                    {allmodels && (
                                        allmodels.map((elem,index)=>{         
                                            return (<div className='outputMainDiv' key={index}>
                                                <textarea className={`output-content theme-scrollbar form-control shadow-none px-3 py-2 ${ index+1 <= newoutputCount  ? "output-content-bg-green": "output-content-bg-white"}`} 
                                                    rows="8" 
                                                    name="generate_text"  
                                                    value={elem.generated_text}
                                                    onChange={(e)=>(update_output_data(e, index, 'text'))}
                                                />
                                                <div className='d-flex justify-content-between output-stats mt-2 mb-3'>
                                                    <div className='d-flex justify-content-start gap-4'>
                                                        <button className='btn shadow-none p-0 border border-0' onClick={(e)=>(update_output_data(e, index, 'favourite'))}>
                                                            {elem.isFavourite ? (
                                                                <img src={Starfill} alt="" />
                                                            ):
                                                            (
                                                                <img src={Star} alt=""/>
                                                            )}
                                                        </button>
                                                        <button className='btn shadow-none p-0 border border-0' onClick={copyToClipBoard}>
                                                            <img src={Copy} alt="" />
                                                        </button>
                                                        <button className='btn shadow-none p-0 border border-0'>
                                                            <img src={Comment} alt="" />
                                                        </button>
                                                        <button className='btn shadow-none p-0 border border-0' onClick={(e)=>(update_output_data(e, index, 'like'))}>
                                                            {elem.isLiked ? (
                                                                <img src={Likefill} alt="" />
                                                            ):
                                                            (
                                                                <img src={Like} alt="" />
                                                            )}
                                                        </button>
                                                        <button className='btn shadow-none p-0 border border-0' onClick={(e)=>(update_output_data(e, index, 'unlike'))}>
                                                            {elem.isUnliked ? (
                                                                <img src={Unlikefill} alt="" />
                                                            ):
                                                            (
                                                                <img src={Unlike} alt="" />
                                                            )}
                                                        </button>
                                                    </div>
                                                    {/* <div className='my-auto'>28d ago</div> */}
                                                    <div className='my-auto'>{timeSince(new Date(elem.created))}</div>
                                                </div>
                                                {allmodels.length-1 !== index && (
                                                    <div className='output-divider mb-4'></div>
                                                )}
                                            </div>)
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

/* Bind Template According To Routes When Click On Side Tab */
function TemplateContent(props) {
    return (
        <Routes>
            <Route exact path='/generate/amazon-product-description' element={<Amazonproductdescription 
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/product-description' element={<Productdescription
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/residential-real-estate' element={<Residentialrealestate
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/blog-post' element={<Blogpost
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/paragraph-re-writting' element={<Paragraphrewritting
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/e-mail' element={<Email
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/instagram-caption' element={<Instagramcaption
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/facebook-ad' element={<Facebookad
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/meta' element={<Meta
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            <Route exact path='/generate/document' element={<Document
                onChange_handleChange={props.onChange_handleChange}
                value_formData={props.value_formData}
                onChange_handleToneChange={props.onChange_handleToneChange}
                onSelectCharacters={props.onSelectCharacters}
                selectToneValue={props.selectToneValue}
                selectToneOption={props.selectToneOption}
                productnameCount={props.productnameCount}
                keywordsCount={props.keywordsCount}
            />}/>
            {/* <Route exact path='*' element={
                <div className='text-center'>
                    <div className='mt-5'>
                        <h2 >404 | Page Not Found</h2>
                    </div>
                </div>}/> */}
            {/* <Route path='*' exact={true} element={<Notfound404/>} /> */}
        </Routes>
    )
}

export default Dashboard