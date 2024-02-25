import { Col, Row, Button } from "react-bootstrap";

export default function Buttons() {
  return (
    <Row className="text-center">
      <Col xs={4} className="d-grid">
        <Button
          variant="info"
          className="text-white"
          style={{ borderRadius: "1rem", fontWeight: 600 }}
        >
          Send
        </Button>
        </Col>
        <Col xs={4} className="d-grid">
        <Button
          variant="info"
          className=" text-white"
          style={{ borderRadius: "1rem", fontWeight: 600 }}
        >
          Receive
        </Button>
        </Col>
        <Col xs={4} className="d-grid">
        <Button
          variant="info"
          className=" text-white"
          style={{ borderRadius: "1rem", fontWeight: 600 }}
        >
          Buy
        </Button>
      </Col>
    </Row>
  );
}
