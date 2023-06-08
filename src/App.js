import React,{useEffect,useState} from 'react';
import './App.css';
import ContentArea from './Components/ContentArea';
import SpotlightListings from './Components/SpotlightListings/SpotlightListings';

function App() {
  const [megaSale,setMegaSale]=useState([]);
  useEffect(()=>{
    fetch("./mocks/product.json")
    .then((response)=>response.json())
    .then((result)=>setMegaSale(result.data));
    return ()=>{};
  },[])
  return (
    <div className="App">
      <div className='app-layout'>
        <ContentArea>
        <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon" spellcheck="false"></input>
        <button>Amazon</button>
        <button>FlipKart</button>
        <button>Snapdeal</button>
          <SpotlightListings data={megaSale}/>
        </ContentArea>
      </div>
    </div>
  );
}

export default App;
