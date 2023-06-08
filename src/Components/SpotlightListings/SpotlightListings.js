
import React from "react";


export default function SpotlightListings({data=[]}){
    return <div className="spotlight-listings-container">
       
        <p>Amazon products detail</p>
        <div className="game-card-listings"> 
       
        {data.map((d,i)=>(
            <div className="game-card"> 
            <img src={d.image}/>
            <div className="game-content">
                <h4 className="gameName">{d.title}</h4>
                <div className="pricing">
                <p className="sellingPrice">{d.price}</p>
                <p className="reviews">{d.reviews}</p>
                <p className="stars">{d.stars}</p>
                </div>
                <button>Click</button>
                </div>
                </div>
                )
            )

        }
        </div>
        </div>  
        
 
}

  