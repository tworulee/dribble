import { Container } from 'react-bootstrap'
import NavComp from './components/NavComp'
import './App.css'
import Amount from './components/Amount'
import Buttons from './components/Buttons'

function App() {
  
  return (
    <>
      <Container className='bg-white  mt-5' style={{ width: '50vh', height: '70vh',border: '2px solid #000',borderRadius:"1rem"}}>
        <NavComp className="bg-white"/>
        <Amount className="bg-white"/>
        <Buttons className="bg-white"/>
      </Container>
        
    </>
  )
}

export default App
