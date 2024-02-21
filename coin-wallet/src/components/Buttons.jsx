import { Col, Row, Button } from "react-bootstrap";

export default function Buttons() {
  return (
    <Row className="text-center">
      <Col xs={12} className="d-flex justify-content-center ">
        <Button
          variant="info"
          className="m-3 ps-3 pe-3 text-white"
          style={{ borderRadius: "1rem", fontWeight: 600 }}
        >
          Send
        </Button>
        <Button
          variant="info"
          className="m-3 ps-3 pe-3 text-white"
          style={{ borderRadius: "1rem", fontWeight: 600 }}
        >
          Receive
        </Button>
        <Button
          variant="info"
          className="m-3 ps-3 pe-3 text-white"
          style={{ borderRadius: "1rem", fontWeight: 600 }}
        >
          Buy
        </Button>
      </Col>
    </Row>
  );
}
