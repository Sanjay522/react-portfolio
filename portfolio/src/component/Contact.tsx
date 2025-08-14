import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
            <h1>RING A BELL!</h1>
        <p>Reach out and let's create something amazing togehter. Let's achive greatness. </p>
        <h2>FILL THIS FORM OUT</h2>
        <div>
            <label htmlFor="name">Name*</label>
            <input type="text" name='name' />
            <label htmlFor="email"></label>
            <input type="email" name='email' />
            <label htmlFor="message"></label>
            <textarea name="messsage" id=""></textarea>
            <button>Submit Now</button>
        </div>
        </div>
    </div>
  )
}

export default Contact