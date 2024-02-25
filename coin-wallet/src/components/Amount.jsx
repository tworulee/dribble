import { Col,Row,Badge } from 'react-bootstrap'

function Amount({totalAmount}) {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
      <h1>
        <Badge className='text-black' bg="white">${totalAmount}</Badge>
      </h1>
      </Col>
    </Row>
  )
}

export default Amount
