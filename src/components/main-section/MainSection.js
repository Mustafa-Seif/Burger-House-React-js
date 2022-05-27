import React from 'react'
import './MainSection.css'
import banner from '../../Restraunt Website Template/images/banner.png'

const MainSection = () => {
  return (
    <section className='banner'>
      <img  src={banner} alt="banner"/>
      <div className='order'>
      <p>its great time for a good taste of burger</p>
      <h1><span>burger</span> for <br></br> week</h1>
      <h5>lorem ti rom decus do then about our product, lorem ti rom decus do then </h5>
      <button >Order</button>
      </div>
    </section>
  )
}

export default MainSection