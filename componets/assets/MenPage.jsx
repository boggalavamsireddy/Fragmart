import React from 'react'
import { menData } from '../../data/men'
import { Link } from 'react-router-dom'
import Navbar from '../loginsigup/Navbar'
function MenPage() {

  return (
    <>
    <Navbar/>
      <div className='pagesection'>
        {
       menData.map((item)=>{
              return(
                <div>
                  <Link to={`/MenWindow/${item.id}`}>
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

export default MenPage
