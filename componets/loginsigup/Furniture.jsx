import React from 'react'
import { furnitureData } from '../../data/furniture';
function Furniture() {
    const anyFivedata = furnitureData.slice(0,5);
    return (
     
         <>
         <div className='protitle'>
          
         <h2>Furniture</h2>
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

export default Furniture
