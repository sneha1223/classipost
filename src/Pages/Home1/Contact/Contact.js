import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact-div'>
            <div className='contact-first'>
            <h1 className='heading'>How To Start Selling Your Products</h1>
            <p className='contact-sub-heading'>It's very simple to choose pricing & level of exposure on pricing page</p>
         
                <div className='contact-grp'>
                <div className='contact-grp-div1'>
                    <img className='button-contact' src='https://radiustheme.com/demo/html/classipost/classipost/img/banner/process1.png'alt=''/>
                    <img src='./images/lines.png' style={{width:'120px'}} alt=''/>
                    <h1 className='contact-text'>upload your products</h1>
                    <p className='contact-sub-text'>Bmply dummy text of the printing and typesing industrypsum been the induse.</p>
                </div>

                <div className='contact-grp-div2'>
                   <img className='button-contact' src='https://radiustheme.com/demo/html/classipost/classipost/img/banner/process2.png' alt=''></img>
                    <h1 className='contact-text'>Set Your Price</h1>
                    <p className='contact-sub-text'>Bmply dummy text of the printing and typesing industrypsum been the induse.</p>
                </div>

                <div className='contact-grp-div3'>
                   <img className='button-contact' src='https://radiustheme.com/demo/html/classipost/classipost/img/banner/process3.png' alt=''/>
                    <h1 className='contact-text'>Start Your Business</h1>
                    <p className='contact-sub-text'>Bmply dummy text of the printing and typesing industrypsum been the induse.</p>
                </div>
                </div>
                </div>
         

          <div className='contact-second'>
            <h1 className='contact-heading'>Receive The Best Offers</h1>
            <p className='contact-heading-last'>Stay in touch with Classified Ads Wordpress Theme and we'll notify you about best ads</p>
         <div className='contact-mail'>
          <input className='input-contact' placeholder='Type your Email Address'></input>
          <button className='btn-subscribe'>Subscribe</button>
          </div>
          </div>

        </div>

    )
}

export default Contact