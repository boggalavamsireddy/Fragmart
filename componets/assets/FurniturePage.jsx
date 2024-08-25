import React from 'react'
import { furnitureData } from '../../data/furniture'
import Navbar from '../loginsigup/Navbar'
import { Link } from 'react-router-dom'
function FurniturePage() {
  

  return (
    <>
    <Navbar/>
      <div className='pagesection'>
        {
      furnitureData.map((item)=>{
              return(
                <div>
                  <Link to={`/FurnitureWindow/${item.id}`}>
                  <div className='pageimagesection'> 
                      <img src={item.image} alt="" />
                  </div>
                  </Link>
                  <div className="prodon">
                    {item.company}<br/>
                    {item.product}{item.model} <h3>
                      moreDetailes..... onClick
                      </h3>
        
                  </div>
                  </div>
              )
          })
        }
      </div>
      </>
    )
}

export default FurniturePage
