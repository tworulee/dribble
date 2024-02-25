import React from 'react'
import { Row,Col,Image } from 'react-bootstrap'

export default function Assets({product}) {
    const totalValue =product.price*product.value

  return (
    
    <Row className='mt-3 p-2' style={{backgroundColor:"#F7F8F9"}} >
      <Col  className='mt-2' xs={2}>
        <Image src={product.avatar} style={{objectFit: "cover",width: "40px", height: "40px"}}/>
      </Col>
      <Col xs={6} className='d-flex flex-column justify-content-center'>
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
