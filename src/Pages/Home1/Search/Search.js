import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='maindiv'>
        <div className='btn-grp'>
       <button className='btns'><span><i class="fa-solid fa-location-dot" style={{fontSize:"16px", color:'#16a085', marginRight:'10px'}}></i></span>Select Location</button>
       <button className='btns'><span><i class="fa-solid fa-bars" style={{fontSize:"16px", color:'#16a085', marginRight:'10px'}}></i></span>Select categories</button>
       <button className='btns'><span><i class="fa-regular fa-text" style={{fontSize:"16px", color:'#16a085', marginRight:'10px'}}></i></span>Enter keyword here...</button>
       </div>
       <button className='search'><span><i class="fa-solid fa-magnifying-glass"style={{fontSize:"16px", color:'#fcaf01', marginRight:'10px'}}></i></span>Search</button>
    
       
       </div>
  )
}

export default Search