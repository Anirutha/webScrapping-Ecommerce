import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

function App() {
  const [products,setProducts] = useState([]);

  // Fetch priduct from my-API
  useEffect(()=>{
    async function getProducts(){ 
      const response = await fetch("https://backend-ec78.vercel.app/products/all",
      {method:'GET',
      headers:{
        "x-auth-token":localStorage.getItem("token")
      }
    })
      const data = await response.json();
      setProducts(data.data)
  
      //console.log(products)
    }
    getProducts();
  },[]);
  return (
    <div className="App">
      <Routes>

        <Route exact path="/"
          element={<Dashboard
          products={products}
          setProducts={setProducts}
          />} />

        <Route path="/login"
          element={<LoginPage />}
        />

        <Route path="/signup"
          element={<SignupPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
