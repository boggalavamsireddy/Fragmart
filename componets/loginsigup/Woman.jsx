import React from 'react'
import { womanData } from '../../data/woman';
function Woman() {

    const anyFivedata = womanData.slice(0,5);
    return (
     
         <>
             <div className='protitle'>
          
         <h2>Woman</h2>
          </div>
      <div className='prosection'>
        {
   anyFivedata.map((item)=>{
              return(
                  <div className='imabox'>
                      <img  className='proimg' src={item.image} alt="" />
                  </div>
              )
          })
        }
      </div>
      </>
  )
}

export default Woman
