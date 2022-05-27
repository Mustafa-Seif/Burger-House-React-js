import React from 'react'
import Contact from './contact/Contact';
import MainSection from './main-section/MainSection';
import Products from './Products/Products';
import UpComing from './UpComing/UpComing';

const Home = () => {
  return (
    <>
    <div className='container'>
      <MainSection/>
      <Products/>
      <UpComing/>
    </div>
    <Contact/>
    </>
  )
}

export default Home