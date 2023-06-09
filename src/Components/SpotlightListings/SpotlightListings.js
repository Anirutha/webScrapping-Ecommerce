
import { Button, Paper } from "@mui/material";
import React from "react";


export default function SpotlightListings({data=[]}){
    return <div className="spotlight-listings-container">
       
        <p>Amazon products detail</p>
        <div className="game-card-listings"> 
       
        {data.map((d,i)=>(
            <div className="game-card"> 
            <div className="game-content">
             <Paper className="game-details">
                     <p><img src={d.image}/></p>
                     <p>title : {d.title}</p>
                     <p>Price : {d.price}</p>
                     <p>reviews : {d.reviews}</p>
                     <p>stars : {d.stars}</p>
                     <Button variant="contained" href={d.link}>
                      Link
                    </Button>
                   </Paper>
                   </div>
                
                </div>
              
                )
            )
        }
        </div>
        </div>
}
       
       
      
        
 

  