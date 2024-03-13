import React from 'react'

function Services({setScalling}) {
  return (
        
     <div className="main">
      <div className="hero"></div>
       <div className="services">
    <h1 className='heading'>Services</h1>
    <div className="serv-content">
      <div className="serv-card">
        <h1>Frontend Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates aliquam quibusdam vero, minima tempore animi doloremque nisi architecto molestias.</p>
        <div className="serv-down">
        <button onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
          <h1>01</h1>
        </div>
      </div>
      <div className="serv-card">
        <h1>Backend Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates aliquam quibusdam vero, minima tempore animi doloremque nisi architecto molestias.</p>
        <div className="serv-down">
        <button onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
          <h1>02</h1>
        </div>
      </div>
      <div className="serv-card">
        <h1>Full Stack Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates aliquam quibusdam vero, minima tempore animi doloremque nisi architecto molestias.</p>
        <div className="serv-down">
        <button onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
          <h1>03</h1>
        </div>
      </div>
    </div>
   </div>
     </div>
  )
}

export default Services