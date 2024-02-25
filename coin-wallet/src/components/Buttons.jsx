import { Col, Row, Button } from "react-bootstrap";

export default function Buttons() {
  return (
    <Row className="text-center">
      <Col xs={4} className="d-grid">
        <Button
          className="text-white"
          style={{
            border:"0",
            borderRadius: "1rem",
            fontWeight: 600,
            backgroundColor: "#50B0C8",
          }}
        >
          Send
        </Button>
      </Col>
      <Col xs={4} className="d-grid">
        <Button
          className=" text-white"
          style={{
            border:"0",
            borderRadius: "1rem",
            fontWeight: 600,
            backgroundColor: "#50B0C8",
          }}
        >
          Receive
        </Button>
      </Col>
      <Col xs={4} className="d-grid">
        <Button
          className=" text-white"
          style={{
            border:"0",
            borderRadius: "1rem",
            fontWeight: 600,
            backgroundColor: "#50B0C8",
          }}
        >
          Buy
        </Button>
      </Col>
    </Row>
  );
}
