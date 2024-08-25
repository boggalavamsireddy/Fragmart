import React from 'react'
import { kitchenData } from '../../data/kitchen'
function Kitchen() {
  const anyFivedata = kitchenData.slice(0,5);
  return (
    <>
        <div className='protitle'>
          
  <h2>Kitchen</h2>
          </div>
    <div className='prosection'>
      {
     anyFivedata.map((item)=>{
            return(
                <div className='imgbox'>
                    <img className='proimg' src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Kitchen
