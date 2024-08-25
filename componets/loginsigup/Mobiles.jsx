import React from 'react'
import { mobileData } from '../../data/mobiles'

function Mobiles() {

   const anyFivedata = mobileData.slice(0,5);
  return (
   
       <>
           <div className='protitle'>
          
       <h2>Mobiles</h2>
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

export default Mobiles
