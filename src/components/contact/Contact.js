import React from 'react'
import './Contact.css'
import img from '../../Restraunt Website Template/images/footer.png'

const Contact = () => {
  return (
    <section className='contact'>
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type='text' placeholder='Enter Your Name' required/>
        <input type='email' placeholder='Enter Your Email' required/>
        <textarea placeholder='Enter Your Massage...'></textarea>
        <input type='submit' value='BOOK'  className='submit'/>
      </form>
    </section>
  )
}

export default Contact