import { Container } from 'react-bootstrap'
import NavComp from './components/NavComp'
import './App.css'
import Amount from './components/Amount'
import Buttons from './components/Buttons'
import AssetsButtons from './components/AssetsButtons'
import Assets from './components/Assets'
import products from "./components/products.json"
import TotalAssets from './components/TotalAssets'
import { useState } from 'react'


function App() {
  const [selectedButton, setSelectedButton] = useState("Crypto");

  return (
    <>
      <Container className='mt-5' style={{ width: '50vh', height: '80vh',border: '2px solid #000',borderRadius:"1rem"}}>
        <NavComp/>
        <Amount/>
        <Buttons/>
        <AssetsButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} /> 

        {selectedButton==="Crypto" && (<div className="mt-2" style={{overflowY:"auto",overflowX:"hidden", height: "calc(62% - 120px)"}}>
        {products.map((product)=>(
          <Assets  product={product} key={product.id} />
        ))}
        </div> )||(<TotalAssets/>)}


         

        
          {/* <TotalAssets/> */}
        
        
        
      </Container>
        
    </>
  )
}

export default App
