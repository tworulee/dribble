import React from 'react'
import { Row,Col,Image } from 'react-bootstrap'

export default function Assets({product}) {
    const totalValue =product.price*product.value

  return (
    
    <Row className='mt-2' style={{backgroundColor:"#FEFBF6"}} >
      <Col xs={2}>
        <Image src="../assets/resim2.jpg"/>
      </Col>
      <Col xs={6} className='d-flex flex-column'>
        <span style={{ fontSize: '1em',fontWeight: 600}}> {product.coin} </span>
        <span style={{ fontSize: '0.8em' }}>${product.price}</span>
      </Col>
      <Col xs={4} className='d-flex flex-column'>
        <h6 style={{ fontSize: '1em',fontWeight: 600}}> {product.value} {product.symbol} </h6>
        <span style={{ fontSize: '0.8em' }}>${totalValue} </span>
      </Col>
    </Row>
  )
}
