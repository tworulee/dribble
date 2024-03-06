import React, { useState } from "react";
import { Button } from "react-bootstrap";
import products from "./products.json";

export default function BuyAssets({selecetedButton,setSelectedButton}) {
  const [formData, setFormData] = useState({
    coin: "",
    price: "",
    avatar: "",
    amount: "",
    symbol: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newData = { ...formData };
    products.push(newData);
    setSelectedButton("Crypto")
    
    console.log(products); 
   
  };

  return (
    <>
      <div className="mt-3 mb-3 d-grid gap-1 text-center" style={{ backgroundColor: "#F7F8F9" }}>
        <input className="p-1 m-2" type="text" name="coin" placeholder="Coin Name" required onChange={handleChange} />
        <input className="p-1 ms-2 me-2 mb-2" type="number" name="price" placeholder="Enter Price" onChange={handleChange} />
        <input className="p-1 ms-2 me-2 mb-2" type="url" name="avatar" placeholder="Enter Icon Url" onChange={handleChange} />
        <input className="p-1 ms-2 me-2 mb-2" type="number" name="amount" placeholder="Enter Amount" onChange={handleChange} />
        <input className="p-1 ms-2 me-2 mb-2" type="text" name="symbol" placeholder="Enter Symbol" onChange={handleChange} />
        <Button onClick={handleSubmit} style={{ backgroundColor: "#50B0C8", border:"0",}}>Buy Asset</Button>
      </div>
    </>
  );
}
