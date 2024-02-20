import { Col, Row, Button } from "react-bootstrap";

export default function Buttons() {
  return (
    <Row className="text-center">
      <Col xs={12} className="d-flex justify-content-center ">
        <Button
          variant="info"
          className="m-3"
          style={{ borderRadius: "1rem", fontWeight: "bold" }}
        >
          Send
        </Button>
        <Button
          variant="info"
          className="m-3"
          style={{ borderRadius: "1rem", fontWeight: "bold" }}
        >
          Receive
        </Button>
        <Button
          variant="info"
          className="m-3"
          style={{ borderRadius: "1rem", fontWeight: "bold" }}
        >
          Buy
        </Button>
      </Col>
    </Row>
  );
}
