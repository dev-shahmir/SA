import Lenis from '@studio-freight/lenis'
import { ReactLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

function Component() {
    const lenisRef = useRef()
    
    useEffect(() => {
      function update(time) {
        lenisRef.current?.raf(time * 3000)
      }
    
      gsap.ticker.add(update)
    
      return () => {
        gsap.ticker.remove(update)
      }
    })

    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
    
    return (
      <ReactLenis ref={lenisRef} autoRaf={false}>
        { /* content */ }
      </ReactLenis>
    )
  }

  export default Component