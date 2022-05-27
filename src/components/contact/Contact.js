import React from 'react'
import './Contact.css'
import img from '../../Restraunt Website Template/images/footer.png'

const Contact = () => {
  return (
    <section className='contact'>
    {/* <img src={img} alt='img'/> */}
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type='text' placeholder='Enter Your Name' />
        <input type='email' placeholder='Enter Your Email' />
        <textarea placeholder='Enter Your Massage...'></textarea>
        <input type='submit' value='BOOK' />
      </form>
    </section>
  )
}

export default Contact