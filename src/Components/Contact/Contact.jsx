import React, { useRef, useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import { IoIosMail, IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

function Contact() {
  const text = useRef(null)
  const nameInput = useRef(null);
  const phoneInput = useRef(null);
  const messageInput = useRef(null);
  const [textVisible, setTextVisible] = useState(false)

  const visible = (e) => {
    e.preventDefault()
    setTextVisible(true)

    nameInput.current.value = ''
    phoneInput.current.value = ''
    messageInput.current.value = ''

    const timeOut = setTimeout(() => {
      setTextVisible(false)
      clearInterval(timeOut)
    }, 2000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    visible(); 
  };
  return (
    <section className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="Message icon" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><IoIosMail className='icon'/>amanpalgsp@gmail.com</li>
            <li><IoIosCall className='icon'/>+91 12345-67890</li>
            <li><IoLocationSharp className='icon'/>Punjab, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Your name</label>
            <input ref={nameInput} type="text" name='name' placeholder='Enter your name' required />
            <label htmlFor="">Phone Number</label>
            <input ref={phoneInput} type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label htmlFor="">Write your message here</label>
            <textarea ref={messageInput} name="message" rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit<FaArrowRight style={{marginLeft: '5px'}} onClick={visible}/></button>
        </form>
        <span ref={text} style={{display: textVisible ? 'block' : 'none'}}>Form is not functioning...</span>
      </div>
    </section>
  )
}

export default Contact
