import React,{useEffect,useState} from 'react';
import './App.css';
import ContentArea from './Components/ContentArea';
import SpotlightListings from './Components/SpotlightListings/SpotlightListings';
import { Button, TextField } from '@mui/material';


function App() {
  const [megaSale,setMegaSale]=useState([]);
  const [search, setSearch] = useState("");
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
        <TextField label="search" variant="outlined" fullWidth sx={{ m: 1 }}
        placeholder="Search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        type="search"
        />
        <Button variant="contained" href={<SpotlightListings data={megaSale}/>}>Amazon</Button>
        <Button variant="contained" href={<SpotlightListings data={megaSale}/>}>Flipkart</Button>
        <Button variant="contained" href={<SpotlightListings data={megaSale}/>}>Snapdeal</Button>
          <SpotlightListings data={megaSale}/>
        </ContentArea>
      </div>
    </div>
  );
}

export default App;
