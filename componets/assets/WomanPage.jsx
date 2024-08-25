import React from 'react'
import { womanData } from '../../data/woman';
import Navbar from '../loginsigup/Navbar';
import { Link } from 'react-router-dom';
function WomanPage() {
  return (
    <>
    <Navbar/>
      <div className='pagesection'>
        {
     womanData.map((item)=>{
              return(
                <div>
                  <Link to={`/WomenWindow/${item.id}`}>
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

export default WomanPage
