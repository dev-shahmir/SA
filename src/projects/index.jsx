import React from 'react'
import Data from '../components/database'


function Projects({setScalling}) {
  const card = Data
  return (
    <div className='main'>
      <div className="hero"></div>
        {
			card.map(myCard=>{
				return  <div key={myCard.id}>


    <div className="projects"  >
      <div className="project-row upper-row">
        <div className="project-left" >
          <h1>{myCard.name}</h1>
          <p>{myCard.detail}</p>
          <div className="features">
            <button>HTML</button>
            <button>CSS</button>
            <button>Reactjs</button>
            <button>Nextjs</button>
          </div>
          <a target='_blank'rel="noreferrer"  href={myCard.link}><button onMouseEnter={()=>setScalling(true)} onMouseLeave={()=>setScalling(false)} className='btn'>VIEW LIVE SITE <img src="./arrow.png" alt="" /></button></a>
        </div>
        <div className="project-right" >
          <img  src={myCard.img} alt="" />
        </div>
      </div>
      {/* <div className="project-row lower-row"></div> */}
    </div>
    </div>
    
            })
        }
    </div>
  )
}

export default Projects