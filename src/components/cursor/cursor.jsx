import { useEffect, useState } from 'react'
import {motion} from "framer-motion"
function Cursor  ({ scalling })   {
    const[largeCircle, setLargeCircle] = useState({x:0,y:0})
    const[smallCircle, setSmallCircle ] =  useState({x:0,y:0})


    useEffect(()=>{
        const mousemove = (e)=>{
            setLargeCircle({x:e.clientX,y:e.clientY})
            setSmallCircle({x:e.clientX,y:e.clientY})
        }
        window.addEventListener('mousemove',mousemove)
        return()=>{
        window.removeEventListener('mousemove',mousemove)
        }
    })


  return (
    <div>
        
        <motion.div animate={{x:largeCircle.x-32, y:largeCircle.y-32, transition:{type:"spring",mass:2.5}}} className="largeCircle"
        style={{scale:scalling ?0.1:1}}></motion.div>

        <motion.div animate={{x:smallCircle.x-8, y:largeCircle.y-8, transition:{type:'spring',mass:1.5}}} className="smallCircle"
        style={{scale:scalling ?0.3:1}}></motion.div>
    </div>
  )
}

export default Cursor