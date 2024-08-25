import React from 'react'
import { menData } from '../../data/men';
function MenWear() {
 

    const anyFivedata = menData.slice(0,5);
    return (
     
         <>
             <div className='protitle'>
          
         <h2>MenWear</h2>
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

export default MenWear
