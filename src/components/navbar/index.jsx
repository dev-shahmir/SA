import React, {useRef, useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {gsap} from 'gsap'
import Hamburger from 'hamburger-react'
gsap.registerPlugin()

function NavbarComponent({setScalling}) {

  const [progress, setProgress] = useState(0)
  const [nav, setNav] = useState(false)
  


  const  openPage = () => {
    try {
      setNav(!nav)
      setProgress(100)
    } catch (error) {
     console.log("error",error);
    }
 }
 
 let navAnime = useRef(null)

  useEffect(()=>{
    gsap.to(navAnime, {
      width: "60%",
      opacity:1,
      duration: 1,
      ease: "back.out(1.7)",
      delay:3.2
    })
  }, [])


  return (
  <div>
      <div className='a'>
        <LoadingBar
          color='#ffff'
          // height='1px'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <br />
      </div>
   <div className="nav" ref={mainMenu =>{
          navAnime = mainMenu
        }}>
        <div className="nav-content">
            <div className="nav-left nav-item">
          <NavLink onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)}  onClick={() => setProgress(100)} to='/projects' >Projects</NavLink>
          <NavLink onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} onClick={() => setProgress(100)} to='/services'  >Services</NavLink>
            </div>
            <div className="logo">
          <NavLink onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} onClick={() => setProgress(100)} to="/"><img  src="./logo.png" alt="" /></NavLink>
            </div>
           <div className="nav-right nav-item">
          <NavLink onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} onClick={() => setProgress(100)} to='/about'>About</NavLink>
          <NavLink onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} onClick={() => setProgress(100)} to='/contact'  >Contact</NavLink>
            </div>
        </div>
    </div>
        <div className="ham-nav">
      <div className="logo1">
      <NavLink onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} onClick={() => setProgress(100)} to="/"><img  src="./logo.png" alt="" /></NavLink>
      </div>
      
      <div className="ham" >
        <h1 onClick={openPage} >
        <Hamburger    />
        </h1>
      </div>
     
        </div>
        <div className={nav ? "links" : "links-1"}>
      <NavLink  onClick={openPage} to="/">- Home -</NavLink>
      <NavLink  onClick={openPage} to="/about">- About -</NavLink>
      <NavLink  onClick={openPage} to="/contact">- Contact -</NavLink>
      <NavLink  onClick={openPage} to="projects">- Projects -</NavLink>
      <NavLink  onClick={openPage} to="services">- Services -</NavLink>
      </div>
    </div>
  )
}

export default NavbarComponent