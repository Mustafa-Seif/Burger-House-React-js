import React from 'react'
import hero from '../../Restraunt Website Template/images/hero.png'
import './UpComing.css'

const UpComing = () => {
  return (
    <section className='Upcoming'>
        <div className='text'>
            <h1>UP COMING EVENT</h1>
            <p>lorem ti rom decus do then about our product, lorem ti rom decus do then COMING EVENT,lorem ti rom decus do then about our product.</p>
          <button>Read More</button>
        </div>
        <div className='hero'>
            <img src={hero} alt='hero' />
        </div>
    </section>
  )
}

export default UpComing