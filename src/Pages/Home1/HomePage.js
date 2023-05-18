import React from 'react'
import Banner from './Banner/Banner'
import Products from './Products/Products'
import Contact from './Contact/Contact'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Search from './Search/Search'

function HomePage() {
  return (
    <div>
        <Search/>
        <Banner/>
        <Products/>
        <Content/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage