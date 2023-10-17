import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'

function Main() {
  const [tip, settip]=useState(0);
  const [amount , setamount]=useState(0);
  return (
   <>
   <div className=' flex justify-center h-screen items-center flex-col'>
    <img src="./images/logo.svg" alt="" className='mb-10' />
    <div className='w-[640px] bg-primary-100  h-[350px] rounded-xl flex flex-row'>
       <Left tip={settip} amount={setamount} />
      <Right tip={tip} amount={amount} />
    </div>
   
   </div>
   
   </>
  )
}

export default Main