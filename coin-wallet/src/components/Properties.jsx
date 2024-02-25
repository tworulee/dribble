import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap';

export default function Properties() {
  return (
    <>
        <Row className='d-flex justify-content-center mt-4'>
            <Col>
                My Properties
            </Col>
            <Col className='d-flex justify-content-end'>
                Payout
            </Col>
        </Row>  
    </>
  )
}
