import React from 'react';

function Right(props) {
  return (
    <>
      <div className='flex-1 m-6 p-6 rounded-xl bg-primary-900 flex flex-col justify-between'>
        <div>
          <div className='flex'>
            <div className="flex-1">
              <span className='text-primary-100 font-bold text-sm'>Tip Amount</span><br />
              <span className='text-primary-300 font-semibold'>/ person</span>
            </div>
            <div className="flex-1 text-right">
              <span className='text-primary-200 font-bold text-3xl'>${parseFloat(props.tip).toFixed(2)}</span>
            </div>
          </div>
          <div className='flex mt-8'>
            <div className="flex-1">
              <span className='text-primary-100 font-bold text-sm'>Total</span><br />
              <span className='text-primary-300 font-semibold'>/ person</span>
            </div>
            <div className="flex-1 text-right">
              <span className='text-primary-200 font-bold text-3xl'>${parseFloat(props.amount)}</span>
            </div>
          </div>
        </div>
        <button className='w-full bg-primary-200 hover:bg-pri-100 rounded p-1 text-primary-900 font-bold mt-auto'>RESET</button>
      </div>
    </>
  );
}

export default Right;