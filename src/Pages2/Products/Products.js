import React from 'react'
import './Products.css'
import {  Card } from 'react-bootstrap';

function Products() {
  return (
    <div className='main-product'>
      <h1 className='product-heading'>Buy & Sell Online Products</h1>
      <p className='product-sub-heading'>Browse To Our Top Products</p>
      <div className='product-btn'>
        <button className='new-btn' >new</button>
        <button className='new-btn' >featured</button>
        <button className='new-btn' >random</button>
        </div>
      <div className='first-row'>

        <div>
          <Card className='card-product-Style' style={{ width: '25rem', height: '30rem' }}>
            <button className='card-product-button'>Clothing</button>
            <div className='img-product-Style'>
              <img style={{ padding: '118px 30px'}} variant="top" src="./images/product-bag1.png" alt='' />
            </div>
            {/* <button><span><i class="fa-solid fa-arrows-up-down-left-right" style={{width:'50px',height:'50px',borderRadius:'50%'}}></i></span></button> */}
          </Card>
          <div className='product-text'>
            <p>Cotton T-Shirt</p>
            <h2>$15</h2>
          </div>
          <p className='product-note'>07 Mar, 2017 Sydney, Australia</p>
        </div>

        <div>
          <Card className='card-product-Style' style={{ width: '25rem', height: '30rem' }}>
            <button className='card-product-button'>Electronics</button>
            <div className='img-product-Style'>
              <img style={{ padding: '87px 30px'}} variant="top" src="./images/product-shirt1.png" alt='' />
            </div>
          </Card>
          <div className='product-text'>
            <p>Smart LED TV</p>
            <h2>$800</h2>
          </div>
          <p className='product-note'>07 Mar, 2017 Sydney, Australia</p>
        </div>


        <div>
          <Card className='card-product-Style' style={{ width: '25rem', height: '30rem' }}>
            <button className='card-product-button'>Clothing</button>
            <div className='img-product-Style'>
              <img style={{ padding: '108px 30px'}} variant="top" src="./images/product-headset1.png" alt='' />
            </div>
          </Card>
          <div className='product-text'>
            <p>Headphones</p>
            <h2>$15</h2>
          </div>
          <p className='product-note'>07 Mar, 2017 Sydney, Australia</p>
        </div>
    </div>





      <div className='second-row'>
        <div >
          <Card className='card-product-Style' style={{ width: '25rem', height: '30rem' }}>
            <button className='card-product-button'>Clothing</button>
            <div className='img-product-Style'>
              <img style={{ padding: '72px 30px'}} variant="top" src="./images/product-red-headset1.png" alt='' />
            </div>
          </Card>
          <div className='product-text'>
            <p>Handbags</p>
            <h2>$15</h2>
          </div>
          <p className='product-note'>07 Mar, 2017 Sydney, Australia</p>
        </div>

        <div >
          <Card className='card-product-Style' style={{ width: '25rem', height: '30rem' }}>
            <button className='card-product-button'>Clothing</button>
            <div className='img-product-Style'>
              <img style={{ padding: '115px 30px'}} variant="top" src="./images/product-ac1.png" alt=''/>
            </div>
          </Card>
          <div className='product-text'>
            <p>Classic Watch</p>
            <h2>$15</h2>
          </div>
          <p className='product-note'>07 Mar, 2017 Sydney, Australia</p>
        </div>

        <div >
          <Card className='card-product-Style' style={{ width: '25rem', height: '30rem' }}>
            <button className='card-product-button'>Clothing</button>
            <div className='img-product-Style'>
              <img style={{ padding: '139px 30px'}} variant="top" src="./images/product-glass1.png" alt=''/>
            </div>
          </Card>
          <div className='product-text'>
            <p className='product-text1'>V-Neck t-shirt</p>
            <h2>$15</h2>
          </div>
          <p className='product-note'>07 Mar, 2017 Sydney, Australia</p>
        </div>
      </div>
     
      <div>
        <h1 className='last-heading'>Do you have Something to Sell?</h1>
        <p className='sub-heading'>Post your ad on classipost.com</p>
        <button className='btn-addPost'><span><i class="fa-regular fa-hand-back-point-right" style={{fontSize:"16px", color:'#fcaf01', marginRight:'10px'}}></i></span>post your ad now!</button>
        </div>
     
    </div>
  )
}
export default Products
