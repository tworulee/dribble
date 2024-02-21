import { Container } from 'react-bootstrap'
import NavComp from './components/NavComp'
import './App.css'
import Amount from './components/Amount'
import Buttons from './components/Buttons'
import Assets from './components/Assets'

function App() {
  
  return (
    <>
      <Container className='mt-5' style={{ width: '45vh', height: '70vh',border: '2px solid #000',borderRadius:"1rem"}}>
        <NavComp/>
        <Amount/>
        <Buttons/>
        <Assets/>
      </Container>
        
    </>
  )
}

export default App
