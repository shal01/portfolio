import React from 'react'
import './home.css'
import peacock from '../../../public/peacockgreendesign.png'
import shalin from '../../../src/assets/shalin.jpg'
import backendImg from '../../../src/assets/backendImg.png'
import mypic from '../../../src/assets/mypic.jpg'

const Home = () => {
  return (
    // <div className='h-screen w-full flex'>
    //    <div  className='w-2/3 h-full bg-white  flex  flex-col justify-center items-center ' style={{backgroundImage:`url(${peacock})`}} >
    //         <h1 className='opacity-100 text-6xl font-bold'>SHALIN V U</h1>
    //         <span className='text-2xl '>-Backend Developer-</span>
    //    </div>
    //     <div  className='w-1/3 h-full relative bg-gray-500 flex flex-col  justify-center '>
    //         <div className='w-full'>
    //             <img className='-ml-28 rounded-full w-6/12 drop-shadow-2xl border-white p-2 border-r-8 border-t-8 border-b-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgB-EwMFIyB2I0XVF9fwqj5jvJ6giM9jo4VZaMBy7uA&s" alt="" />
    //         </div>
           
    //     </div> box-shadow: ;
    // </div>
    <div style={{backgroundColor:"#8547b4",}} className='w-full h-screen md:h-screen grid grid-cols-6 place-items-center '>
         <div className='col-span-6 order-2 md:order-1 md:col-span-3 flex items-center'>
             {/* <img className='rounded-full   shadow-2xl   mr-12' style={{width:"300px",height:"300px",}} src={shalin} alt="" /> */}
              <div className='flex flex-col items-center'>

                 <h1 className='text-white text-6xl font-bold'>SALIN V U</h1>
                 <span className=' text-white border px-2 py-1 mt-1 font-bold  text-sm'>BACKEND DEVELOPER</span>
              </div>
         </div>
         <div className=' col-span-6 order-1 md:order-2 md:col-span-3 md:h-screen flex items-end bg-transparent md:bg-white'>

           <img src={backendImg} alt="" />
         </div>
    </div>
  )
}

export default Home
