import React from 'react'
import aboutImg from '../../../src/assets/aboutImg.jpg'
const About2 = () => {
  return (
    <div className='w-full  md:h-screen p-5 '>
       <div style={{backgroundImage:`url(${aboutImg})`,backgroundSize:"cover"}} className='w-full h-full border flex  flex-col justify-center border-fuchsia-400 rounded-md'>
        <div className='bg-white p-5'>
           <h1 className='text-center text-4xl font-bold underline'>ABOUT</h1>
          <p className='px-5 md:px-40 tracking-widest  mt-10'>
          Passionate and talented computer science graduate with full-stack programming experience in Python and Django. As a self-learner with an open mind to new technologies, I'm looking for opportunities to use my excellent programming abilities and full-stack development experience to contribute significantly to a dynamic team.
          </p>
          </div>
       </div>

    </div>
  )
}

export default About2
