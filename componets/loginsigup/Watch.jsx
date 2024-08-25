import React from 'react'
import { watchData } from '../../data/watch';
function Watch() {
    const anyFivedata = watchData.slice(0,5);
    return (
     
         <>
             <div className='protitle'>
          
         <h2>Watchs</h2>
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

export default Watch
