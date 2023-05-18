import React from 'react'
import './Footer.css'

function Footer() {
    return (
<div className='footer'>
        <div className='container footer-div '>
            <div className='row'>
                <div className='col'>
                    <h3 className='footer-heading'>About us</h3>
                    <hr/>
                    <ul>
                        <li><p>about us</p></li>
                        <li><p>Career</p></li>
                        <li><p>Terms & Conditions</p></li>
                        <li><p>Privacy Policy</p></li>
                        <li><p>Sitemap</p></li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h3 className='footer-heading'>How to sell fast</h3>
                    <hr/>
                    <ul>
                        <li><p>How to sell fast</p></li>
                        <li><p>Buy Now on Classipost</p></li>
                        <li><p>Membership</p></li>
                        <li><p>Banner Advertising</p></li>
                        <li><p>Promote your ad</p></li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h3 className='footer-heading'>Help & Support</h3>
                    <hr/>
                    <ul>
                        <li><p>Live Chat</p></li>
                        <li><p>FAQ</p></li>
                        <li><p>Stay safe on classipost</p></li>
                        <li><p> Contact us</p></li>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <h3 className='footer-heading'>Follow Us On</h3>
                    <hr/>
                    <ul>
                        <li><img className='playstore' src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/follow1.jpg' alt=''></img></li>
                        <li><img className='appstore' src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/follow2.jpg' alt=''></img></li>
                        <div className='icon-list'>
                        <li><img className='icons' src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/facebook.jpg'alt=''/></li>
                        <li><img className='icons' src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/twitter.jpg' alt=''/></li>
                        <li><img className='icons'src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/youtube.jpg' alt=''/></li>
                        <li><img className='icons'src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/pinterest.jpg' alt=''/></li>
                        <li><img className='icons'src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/linkedin.jpg' alt=''/></li>
                        
                        </div>
                    </ul>
                </div>
            </div>

        </div>
        <div className='footer-end'>
           <p className='copyright'>Copyright © classipost</p>
           <div className='footer-end-icon'>
            <img className='footer-icon' src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/card1.jpg' alt=''/>
            <img className='footer-icon'src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/card2.jpg' alt=''/>
            <img className='footer-icon'src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/card3.jpg' alt=''/>
            <img className='footer-icon'src='https://radiustheme.com/demo/html/classipost/classipost/img/footer/card4.jpg' alt=''/>
           </div>
        </div>
        </div>
    )
}

export default Footer