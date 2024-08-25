import React from 'react'
import { mobileData } from '../../data/mobiles'
import Navbar from '../loginsigup/Navbar'
import { Link } from 'react-router-dom'
function PageMobile() {

    return (
      <>
      <Navbar/>
        <div className='pagesection'>
          {
         mobileData.map((item)=>{
                return(
                  <div>
                    <Link to={`/MobileWindow/${item.id}`}>
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

export default PageMobile
