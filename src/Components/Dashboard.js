/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { Button, Paper } from '@mui/material';
import Base from '../Base/Base';
import { useNavigate } from 'react-router-dom';

function Dashboard({products,setProducts}){
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
       navigate("/login", {replace:true})
    }
   })
   
   return(
      <Base>
      <div className="spotlight-listings-container">
      <p>Amazon products detail</p>
     <div className="game-card-listings">
     {products.map((product, idx) => (
            <div className="product" key={idx}>
             <div className="game-card"> 
            <div className="game-content">
            <Paper elevation={5} className="game-details">
            <img src={product.image} alt={product.title} />
                    <p>title : {product.title}</p>
                    <p>Price : {product.price}</p>
                    <p>reviews : {product.reviews}</p>
                    <p>stars : {product.stars}</p>
                   
                  <Button variant="contained" href={product.link}>
                      Link
                    </Button>
                  </Paper>
                  </div>
                  </div> 
                  </div> 
                  
     ))}
     </div>
     </div>
          </Base>
    )
}
export default Dashboard
