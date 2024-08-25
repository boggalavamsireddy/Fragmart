import React from 'react'
import { tvData } from '../../data/tv'
import Navbar from '../loginsigup/Navbar'
import { Link } from 'react-router-dom'
function TvPage() {
    return (
      <>
      <Navbar/>
        <div className='pagesection'>
          {
          tvData.map((item)=>{
                return(
                  <div>
                    <Link to={`/TvWindow/${item.id}`}>
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

export default TvPage
