import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='flexbox-container'>

      <div className='first'>
        <i class='fa fa-life-ring' style={{color:'#fcaf01',marginTop:'4px',marginLeft:'8px'}}></i>
        <p>Have any questions? +088 199990 or mail@classipost</p>
      </div>

      <div className='second'>
        <i class='fa fa-lock'style={{color:'#fcaf01',marginTop:'12px',marginLeft:'8px'}}></i>
        <p className='login'>Login</p>
        <i class='fa fa-comments'style={{color:'#fcaf01',marginTop:'12px',marginRight:'8px'}}></i>
        <p className='live-chat'>Live Chat</p>

      </div>
    </div>
  )
}

export default Header