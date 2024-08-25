import React from 'react'
import { useParams } from 'react-router'
import { kitchenData } from '../../data/kitchen'
import Navbar from '../loginsigup/Navbar';
import { useCart } from '../useCart/CartContext';
function KitchanWindow() {
    const{id} = useParams()
    const {addToCart,cartItems}= useCart()
    
    const product = kitchenData.find((item)=> item.id === id);
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
                 <div className="ind-desc C">
                 <p>
                 {product.description} <br/>
                 {product.category} 
                 </p>
                 </div>
                       <button onClick={()=>addToCart(product)}> Add to Cart</button>
             </div>
       
             </div>
             </>
                   
       
       )
}

export default KitchanWindow
