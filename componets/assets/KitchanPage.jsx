import React from 'react'
import { kitchenData } from '../../data/kitchen'
import Navbar from '../loginsigup/Navbar'
import { Link } from 'react-router-dom'
function KitchanPage() {
    return (
      <>
      <Navbar/>
        <div className='pagesection'>
          {
            kitchenData.map((item)=>{
                return(
                  <div>
                    <Link to={`/KitchanWindow/${item.id}`}>
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

export default KitchanPage
