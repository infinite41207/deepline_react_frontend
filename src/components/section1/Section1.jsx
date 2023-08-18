/* eslint-disable jsx-a11y/anchor-is-valid */
import './section1.css';

/* Images */
import AmazonIcon from '../../assets/images/section1-threads/amazon-icon.svg';
import Writing1Icon from '../../assets/images/section1-threads/writing-1-icon.svg';
import BlogIcon from '../../assets/images/section1-threads/blog-icon.svg';
import ParagraphIcon from '../../assets/images/section1-threads/paragraph-writing-icon.svg';
import ColdemailIcon from '../../assets/images/section1-threads/cold-email.svg';
import InstagramIcon from '../../assets/images/section1-threads/instagram-icon.svg';
import FacebookIcon from '../../assets/images/section1-threads/facebook-icon.svg';
import GoogleIcon from '../../assets/images/section1-threads/google-icon.svg';
import BlogbetaIcon from '../../assets/images/section1-threads/blog-icon-beta.svg';
import ChataiIcon from '../../assets/images/section1-threads/content-expander-icon.svg';
import ImageaiIcon from '../../assets/images/section1-threads/image-ai-icon.svg';
import CustomstyleIcon from '../../assets/images/section1-threads/content-rewriter-icon.svg';
import Beta from '../../assets/images/section1-threads/beta.svg';

/* Icons */
import {FaLongArrowAltRight} from 'react-icons/fa';

const Section1 = () => {
  return (
    <div className='container text-center section-1'>
      <h6 className='highlighted-text text-primary-1 mb-4'>Get started</h6>
      <h1 className='heading-1 mb-4'>
        "Unlocking the Power of Creative Possibilities"
      </h1>
      <div className="content-text text-dark-5">Easy to use and require no prior experience or knowledge.</div>
      
      <div className='my-4 py-2'>
        <div className='row'>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={AmazonIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                    Amazon Descriptions
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={Writing1Icon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                    Product Descriptions
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={BlogIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                    Blog Posts
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={ParagraphIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  Paragraph Re-Writting
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={ColdemailIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  E-mail Engaging Letters
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={InstagramIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  Instagram Captions
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={FacebookIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  Facebook Ads
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={GoogleIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  Meta Descriptions
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={BlogbetaIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  Documents
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={ChataiIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  Chat AI
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={ImageaiIcon} alt="" />
                </div>
                <div className='ms-2 card-text d-flex'>
                  <div className='mt-1'>
                    Image AI
                  </div>
                  <div className='ms-3 my-auto'>
                    <img src={Beta} alt="" width="50"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 card-outer">
            <div className='product-card'>
              <div className='d-flex align-items-center'>
                <div>
                  <img src={CustomstyleIcon} alt="" />
                </div>
                <div className='ms-2 card-text'>
                  Custom Style Generator
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='content-text text-dark-1 col-12 col-md-10 col-lg-8 m-auto'>
        deepline.ai offers the most advanced AI technology to help you automate your business processes and operations. With our free demo, you can see how this transformative technology can help you achieve new levels of success.
      </div>

      <div className='mt-4 pt-3'>
        <a href="https://www.app.deepline.ai/signup" rel="noreferrer" className='btn btn-theme-blue-gradient-1'>
          Increase your sales & leads
          <FaLongArrowAltRight className='ms-2 mb-1'/>
        </a>
      </div>
    </div>
  )
}

export default Section1