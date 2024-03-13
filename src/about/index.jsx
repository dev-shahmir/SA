import React  from 'react'

function About() {










  return (
    <div className="main">
    <div className="hero"></div>
        <div className="about-main">
          <div className="upper-about" >
      <div className="about-card">
        <h1>01. About Me</h1>
        <p className='about-des'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente laborum natus possimus voluptatibus aliquam, provident quos labore adipisci eum harum dolore exercitationem sequi sunt alias porro deserunt doloremque iure cum suscipit ipsa accusantium beatae veritatis. Nulla assumenda illum fugiat Eveniet.</p>
      </div>  
      <div className="about-card">
        <h1>02. Skills</h1>
        <div className="skills">
          <button className='skill-btn'>HTML</button>
          <button className='skill-btn'>CSS</button>
          <button className='skill-btn'>JavaScript</button>
          <button className='skill-btn'>Bootstrap</button>
          <button className='skill-btn'>Tailwind</button>
          <button className='skill-btn'>Daisy UI</button>
          <button className='skill-btn'>React Js</button>
          <button className='skill-btn'>Next Js</button>
          <button className='skill-btn'>Mongo DB</button>
          <button className='skill-btn'>Node js</button>
          <button className='skill-btn'>Express js</button>
          <button className='skill-btn'>TypeScript</button>
        </div>
      </div>
      </div>
      <div className="lower-about">
        <h1>03. Education</h1>
        <div className="edu">
          <div className="edu-row">
            <h2>Fullstack Web Development</h2>
            <h2>Ideoversity, Arfa Technology Park, Lahore.</h2>
            <h2>Jun-Dec / 2023</h2>
          </div>
          <div className="edu-row">
            <h2>Matriculation /Biology(Science)</h2>
            <h2> Freedom Grammer School, Garhi Shahu, Lahore.</h2>
            <h2>May 2023</h2>
          </div>
          <div className="edu-row">
            <h2>College /Intermediate Of Computer Science</h2>
            <h2>MAO Graduate College, Lahore.</h2>
            <h2>Aug-Ongoing / 2023</h2>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default About