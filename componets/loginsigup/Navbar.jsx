import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../useCart/CartContext'
function Navbar() {
  const {cartItems} = useCart()
  return (
    <>
    <div className='navsection'>
      <div className='barsection'>
        <h4>
          
          Frag-Mart
          </h4>
      </div>

      <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
      
        <div className="user">
          <div className="user-detail">
            <h5>SignIN/SignUp</h5></div>
        </div>
        <Link to= '/cart'>
          <div className="cart">Cart
          <span>
            {cartItems.length}
          </span>
          </div>
          </Link>
      </div>
      
   

      
    
      <div className="subMenu">
        <ul>
        <Link to='/Mobile' className='custom-link'>

      <li>Mobiles</li>
        </Link>
     

    <Link to='/Kitchan' className='custom-link'>
    
      <li>Kitchan</li>
    </Link>
      <Link to='/Tv' className='custom-link' >
      
      <li>TV</li>
      </Link>
      <Link to='/Watch' className='custom-link'>
      
      <li>Watch</li>
      </Link>
      <Link to='/Woman' className='custom-link'>
      
      <li>Woman</li>
      </Link>
      <Link to='/Furniture' className='custom-link'>
      
      <li>Furniture</li>
      </Link>
      <Link to='/Men' className='custom-link'>
      <li>MenWear</li>
      </Link>
      

   
      

        </ul>
      </div>
    </>
  )
}

export default Navbar
