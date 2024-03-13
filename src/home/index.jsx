import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Bg from '../components/bg';
gsap.registerPlugin(ScrollTrigger);

function Home() {

  const about = useRef()
  about.current = []

  
  useEffect(() => {
    about.current.forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0 }, {
            autoAlpha: 1,
            translateY:"0px",
            scale:1,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
                // markers:true,
            }
        })
    })
}, [])

const abouts = (el) => {
    if (el && !about.current.includes(el)) {
        about.current.push(el);
    }
}


const card1 = useRef()
  card1.current = []
  
  useEffect(() => {
    card1.current.forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0 }, {
            autoAlpha: 1,
            translateY:"0px",
            scale:1,
            duration: 1,
            delay:0.8,
            scrollTrigger: {
                trigger: el,
                start: "top bottom-=60",
                toggleActions: "play none none reverse"
                // markers:true,
            }
        })
    })
}, [])


const cards1 = (el) => {
    if (el && !card1.current.includes(el)) {
        card1.current.push(el);
    }
}


const card2 = useRef()
  card2.current = []
  
  useEffect(() => {
    card2.current.forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0 }, {
            autoAlpha: 1,
            translateY:"0px",
            scale:1,
            duration: 1,
            delay:1,
            scrollTrigger: {
                trigger: el,
                start: "top bottom-=60",
                toggleActions: "play none none reverse"
                // markers:true,
            }
        })
    })
}, [])


const cards2 = (el) => {
    if (el && !card2.current.includes(el)) {
        card2.current.push(el);
    }
}



const card3 = useRef()
  card3.current = []
  
  useEffect(() => {
    card3.current.forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0 }, {
            autoAlpha: 1,
            translateY:"0px",
            scale:1,
            duration: 1,
            delay:1.2,
            scrollTrigger: {
                trigger: el,
                start: "top bottom-=60",
                toggleActions: "play none none reverse"
                // markers:true,
            }
        })
    })
}, [])


const cards3 = (el) => {
    if (el && !card3.current.includes(el)) {
        card3.current.push(el);
    }
}


  return (

    <div className="main">
    <div  className="hero-sec hero-bg">
      <div className="bg"><Bg /></div>
        <div className="content">
            <h2 className='intro'>Hi There! I Am A</h2>
            <h1>Full Stack</h1>
            <h2 className="develop"> Web Developer</h2>
            <p>~ AVAILABLE FOR WORK ~</p>
        </div>
        <div className="btns">
            <button className='btn'>GET RESUME <img src="./arrow.png" alt="" /></button>
            <Link to='/projects'><button className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button></Link>
        </div>
    </div>
    <div className="about">
      <div className="about-left" ref={abouts}>
        <div className="about-content">
        <h1>About Me</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum natus possimus voluptatibus aliquam, provident quos labore adipisci eum harum dolore exercitationem sequi sunt alias porro deserunt doloremque iure cum suscipit ipsa accusantium beatae veritatis. Nulla assumenda illum fugiat Eveniet.</p>
        <Link to='/about'><button className='btn'>VIEW MORE <img src="./arrow.png" alt="" /></button></Link>
        </div>
      </div>
      <div className="about-right" ref={abouts}>
      <video src='./bg-4.mp4' autoPlay muted loop className='bg-video'>
      </video>
      </div>
    </div>

   <div  className="services s" ref={abouts}>
    <h1 className='heading'>Services</h1>
    <div className="serv-content">

      <div className="serv-card c" ref={cards1}>
        <h1>Frontend Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates aliquam quibusdam vero, minima tempore animi doloremque nisi architecto molestias.</p>
        <div className="serv-down">
        <button  className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
          <h1>01</h1>
        </div>
      </div>
      <div className="serv-card c" ref={cards2}>
        <h1>Backend Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates aliquam quibusdam vero, minima tempore animi doloremque nisi architecto molestias.</p>
        <div className="serv-down">
        <button  className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
          <h1>02</h1>
        </div>
      </div>
      <div className="serv-card c" ref={cards3}>
        <h1>Full Stack Development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates aliquam quibusdam vero, minima tempore animi doloremque nisi architecto molestias.</p>
        <div className="serv-down">
        <button className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
          <h1>03</h1>
        </div>
      </div>


    </div>
   </div>

   <div className="work" ref={abouts}>
    <h1 ref={cards1} className='heading'>Projects</h1>
    <div className="work-row">
      <div className="work-card" ref={cards1}>
        <div className="work-content">
        <h1>Project Name</h1>
        <button  className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
        </div>
      </div>
      <div className="work-card" ref={cards1}>
        <div className="work-content">
      <h1>Project Name</h1>
        <button  className='btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button>
        </div>
      </div>
    </div>
    <Link to='/projects'><button  className='btn proj-btn'>VIEW PROJECTS <img src="./arrow.png" alt="" /></button></Link>
   </div>
    <div className="contact">
      <div className="contact-left l" ref={abouts}>
        <h1>Let's Work <br/> Together!</h1>
        <a  href="">ashahmir467@gmail.com</a>
        <div className="social">
        <h2>Follow me on</h2>
        <div className="social-icons w">
          <img  ref={cards1} src="./insta.svg" alt="" />
          <img  ref={cards2} src="./linkedin.png" alt="" />
          <img  ref={cards3} src="./github.png" alt="" />
        </div>
        </div>
      </div>
      <div className="contact-right r" ref={abouts}>
        <input  type="text" placeholder='Your Name'/>
        <input  type="email" placeholder='Your Email'/>
        <textarea cols="30" rows="7" placeholder='Message'></textarea>
        <button  className='btn b1'>SEND MESSAGE <img src="./arrow.png" alt="" /></button>
      </div>
    </div>    
    </div>
  )
}

export default Home