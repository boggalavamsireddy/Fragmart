import React from 'react'
import { tvData } from '../../data/tv';
function TV() {
    const anyFivedata = tvData.slice(0,5);
    return (
     
         <>
             <div className='protitle'>
          
         <h2>Tv</h2>
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

export default TV
