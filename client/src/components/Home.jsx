// import React from 'react'

function Home() {
  return (
     <>
     <div className='h-screen w-screen bg-slate-400'>
    <div className='bg-slate-300 py-4 '>
          <ul className='flex text-center ml-96 pl-18  mt-5 space-x-14'>
               <li className='bg-amber-300 px-4 rounded-md'>Home</li>
               <li className='bg-amber-300 px-4 rounded-md'>Vedios</li>
               <li className='bg-amber-300 px-4 rounded-md'>asdf</li>
               <li className='bg-amber-300 px-4 rounded-md'>qwerer</li>
          </ul>
    </div>

     <div className='bg-slate-300 w-max h-screen px-10'>
          <ul className='flex-col space-y-12 pt-5'>
               <li className='bg-amber-300 px-4 rounded-md' >liked vedios</li>
               <li className='bg-amber-300 px-4 rounded-md'>saved vedios</li>
               <li className='bg-amber-300 px-4 rounded-md'>watch later</li>
               <li className='bg-amber-300 px-4 rounded-md'>subscribed</li>
          </ul>
     </div>
           
           <ul className='flex grid-rows-none space-x-6'>
               <li>vedio1</li>
               <li>vedio2</li>
               <li>vedio3</li>
               <li>vedio4</li>
           </ul>




    </div>
    </>
  )
}

export default Home