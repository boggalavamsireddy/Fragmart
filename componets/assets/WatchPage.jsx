import React from 'react'
import { watchData } from '../../data/watch'
import Navbar from '../loginsigup/Navbar'
import { Link } from 'react-router-dom'
function WatchPage() {

  return (
    <>
    <Navbar/>
      <div className='pagesection'>
        {
     watchData.map((item)=>{
              return(
                <div>
                  <Link to={`//${item.id}`}>
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

export default WatchPage
