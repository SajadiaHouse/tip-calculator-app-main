import React, { useState } from 'react'

function Left(props) {
  const [bill, setbill]=useState(0);
  const [person , setPerson]=useState(0);
  const handleClick=(e)=>{
      e.preventDefault();
      let per= e.target.value;
      //calculalte tipe per peson
      let tipAmount=parseFloat((per/100) * bill).toFixed(2)
      props.tip(tipAmount);

      //calculate total amont
      let total= parseFloat(tipAmount* person).toFixed(2);
      console.log(total);
      props.amount(total);
      
  }
  return (
    <>
    <div className='flex-1 p-6'>
        <div>
          <label htmlFor="price" className='block text-sm font-medium text-primary-900'>Bill</label>
          <div className='relative mt-1 rounded-lg shadow-sm '>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className='text-gray-500 sm:text-sm'>$</span>
          </div> 
          <input type="text" className='w-full rounded-md border-0 py-1.5 bg-primary-100 ring-primary-300 placeholder:text-gray-300 pl-7 text-right pr-3 font-bold text-green-900'  placeholder='0.00' onChange={(e)=>setbill(e.target.value)} />
          </div>
          
        </div>
        <div className='mt-6'>
          <label htmlFor="">Select Tip %</label>
          <div className='grid grid-cols-3 justify-items-stretch text-center font-bold text-primary-100'>
            <button onClick={handleClick} className='p-2 hover:bg-primary-200 hover:text-primary-900 bg-primary-900  flex-auto rounded m-1' value="5">5%</button>
            <button onClick={handleClick} className='p-2 hover:bg-primary-200 hover:text-primary-900 bg-primary-900  flex-auto rounded m-1' value="10">10%</button>
            <button onClick={handleClick} className='p-2 hover:bg-primary-200 hover:text-primary-900 bg-primary-900  flex-auto rounded m-1' value="15">15%</button>
            <button onClick={handleClick} className='p-2 hover:bg-primary-200 hover:text-primary-900 bg-primary-900  flex-auto rounded m-1' value="20">20%</button>
            <button onClick={handleClick} className='p-2 hover:bg-primary-200 hover:text-primary-900 bg-primary-900  flex-auto rounded m-1' value="25">25%</button>
            <input type="text" className='p-2 text-green-900 m-1 rounded flex-auto' placeholder='Custom' onChange={handleClick}  />
          </div>
        </div>

        <div className='mt-6'>
          <label htmlFor="price" className='block text-sm font-medium text-green-900'>Number of Peroson</label>
          <div className='relative mt-1 rounded-lg shadow-sm '>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className='text-gray-500 sm:text-sm'><img src="./images/icon-person.svg" alt="" /></span>
          </div> 
          <input type="text" className='w-full rounded-md border-0 py-1.5 bg-primary-100 ring-primary-300 placeholder:text-primary-300 pl-7 text-right pr-3 font-bold text-green-900'  placeholder='0' onChange={e=>setPerson(e.target.value)} />
          </div>
          
        </div>

    </div>
    </>
  )
}

export default Left