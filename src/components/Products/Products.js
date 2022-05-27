import React from 'react'
import './Products.css'
import img1 from '../../Restraunt Website Template/images/s1.png'
import img2 from '../../Restraunt Website Template/images/s2.png'

const Products = () => {
  return (
    <section className='Products'>
      <h1>CHOOSE & ENJOY</h1>
      <p>lorem ti rom decus do then about our product, lorem ti rom decus do then</p>
      <div className='Products-card'>
        <div className='card-burger'>
          <img src={img1} alt="burger"   className='burger'/>
          <p>Lurger Burger</p>
          <button>Order Now</button>
        </div>
        <div className='card-burger'>
          <img src={img2} alt="burger"  className='burger' />
          <p>Le begeon Burger</p>
          <button>Order Now</button>
        </div>
        <div className='card-burger'>
          <img src={img1} alt="burger" className='burger' />
          <p>Lurger Burger</p>
          <button>Order Now</button>
        </div>
      </div>
    </section>
  )
}

export default Products