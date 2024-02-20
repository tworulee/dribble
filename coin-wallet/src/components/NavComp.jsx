import { Image, Row, Col, Button } from "react-bootstrap";

export default function NavComp() {
  return (
    <Row className="mt-4">
      <Col className=" d-flex justify-content-between">
        <Image
          src="../assets/resim.jpg"
          roundedCircle
          style={{ width: "30px", height: "30px",objectFit: "cover" }}
        />
        <h5 style={{ color: "#232D3F" }}>My Wallet</h5>
        <Button
          className="text-secondary bg-white p-1 "
          style={{ border: "none" }}
        >
          X
        </Button>
      </Col>
      {/* <Col className="mt-1">
        <h5 style={{ color: "#232D3F" }}>My Wallet</h5>
      </Col>
      <Col className="d-flex justify-content-end">
        <Button
          className="text-secondary bg-white p-1 "
          style={{ border: "none" }}
        >
          X
        </Button>
      </Col> */}
    </Row>
  );
}
