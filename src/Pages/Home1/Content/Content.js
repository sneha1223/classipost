import React from 'react'
import './Content.css'
import { Card } from 'react-bootstrap'

function Content() {
    return (
        <div className='content-div'>
            <div className='img-container'>
                <img className='img-content' src='https://radiustheme.com/demo/html/classipost/classipost/img/banner/counter-back1.jpg' alt=''></img>
                <div>
                    <img className='img-product' src='https://radiustheme.com/demo/html/classipost/classipost/img/banner/counter1.png' alt='' />
                    <h3 className='product-count'>100000</h3>
                    <h5 className='product'>Our Products</h5>
                </div>
                <div>
                    <img className='img-person' src='https://radiustheme.com/demo/html/classipost/classipost/img/banner/counter2.png' alt='' />
                    <h3 className='person-count'>500000</h3>
                    <h5 className='person-text'>Our Happy Buyers</h5>
                </div>
                <div>
                    <img className='img-users' src='https://radiustheme.com/demo/html/classipost/classipost/img/banner/counter3.png' alt=''/>
                    <h3 className='user-count'>200000</h3>
                    <h5 className='user-text'>Verified Users</h5>
                </div>
            </div>
            <h1 className='content-heading'>Start Earning From Things You Don't Need Anymore</h1>
            <p className='sub-heading'>It's very Simple to choose pricing & Plan</p>

            <div className='content-card'>
                <div>
                    <Card className='card-content-Style' style={{ width: '25rem', height: '30rem' }}>
                        <div>
                            <p className='first-heading'>free post</p>
                            <p className='symbol'>$</p>
                            <p className='second-heading'>0</p>
                            <p className='third-heading'>Always FREE Ad Posting </p>
                            <p className='sub-heading-content'>Post as many ads as you like for 30 days without limitations and 100% FREE SUBMIT AD</p>
                        </div>
                        <button className=' btn-submit'>submit ad</button>
                    </Card>
                </div>

                <button className='button-or'>OR</button>
                <div>
                    <Card className='card-content-Style' style={{ width: '25rem', height: '30rem' }}>
                        <div>
                            <p className='first-heading'>Premium Post</p>
                            <p className='symbol'>$</p>
                            <p className='second-heading'> 19 </p>
                            <p className='third-heading'>Featured Ad Posting</p>
                            <p className='sub-heading-content'>Post as many ads as you like for 30 days without limitations and 100% FREE SUBMIT AD</p>
                        </div>
                        <button className='btn-submit'>submit ad</button>
                    </Card>
                </div>
            </div>
        </div>


    )
}

export default Content