import React from 'react'

function Contact({setScalling,abouts,cards1,cards2,cards3}) {
  return (
    <div className="main">
    <div className="hero"></div>
    <div className="contact">
      <div className="contact-left" ref={abouts}>
        <h1>Let's Work <br/> Together!</h1>
        <a onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} href="#">ashahmir467@gmail.com</a>
        <div className="social">
        <h2>Follow me on</h2>
        <div className="social-icons">
          <img ref={cards1} onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} src="./linkedin.png" alt="" />
          <img ref={cards2} onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} src="./insta.svg" alt="" />
          <img ref={cards3} onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} src="./github.png" alt="" />
        </div>
        </div>
      </div>
      <div className="contact-right" ref={abouts}>
        <input onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} type="text" placeholder='Your Name'/>
        <input onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} type="email" placeholder='Your Email'/>
        <textarea onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} cols="30" rows="7" placeholder='Message'></textarea>
        <button onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} className='btn'>SEND MESSAGE <img src="./arrow.png" alt="" /></button>
      </div>
    </div>    
   </div>
  )
}

export default Contact