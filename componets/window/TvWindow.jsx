import React from 'react'
import { tvData } from '../../data/tv';
import { useParams } from 'react-router';
import Navbar from '../loginsigup/Navbar';
import { useCart } from '../useCart/CartContext';

function TvWindow() {
    const {id} = useParams()
    const {addToCart,cartItems}= useCart()
    const product = tvData.find((item)=> item.id === id);
    console.log(id);
    return (
        <>
        <Navbar/>
  
        <div className="ind-section">
         <div className="ind-image">
             <img src={product.image} alt="" />
             </div>
             <div className="ind-deatails space">
                <div className="window-deatals">
                    <h2>{product.company}</h2>
                </div>
                <div className="ind-model space">
               <h3>{product.model} </h3>
               </div>
                 <div className="ind-price space">
                    <h2>{product.price} </h2>
                 </div>
                 <div className="ind-desc space">
                 <p>
                 {product.description} 
                 </p>
                 </div>
                 <button onClick={()=>addToCart(product)}> Add to Cart</button>
             </div>
       
             </div>
             </>
       )
}

export default TvWindow
