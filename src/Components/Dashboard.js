
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ContentArea from './Components/ContentArea';
import SpotlightListings from './Components/SpotlightListings/SpotlightListings';
function Dashboard(){
    const [megaSale, setMegaSale] = useState([]);
  useEffect(() => {
    fetch("./mocks/product.json")
      .then((response) => response.json())
      .then((result) => setMegaSale(result.data));
    return () => { };
  }, [])
    return <div className="content-area-container">
     <div className='app-layout'>
        <ContentArea>
        <input type="text" id="twotabsearchtextbox" value="shelves" name="field-keywords" autocomplete="off" placeholder="Search" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon" spellcheck="false"></input>
        <Button variant="contained" onClick={<SpotlightListings data={megaSale}/>}>
                     Amazon
                    </Button>

        </ContentArea>
      </div>

    </div>
}
export default Dashboard
