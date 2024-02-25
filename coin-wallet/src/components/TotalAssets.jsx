import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import products from "./products.json";

export default function TotalAssets({totalAmount}) {
  const totalProperties = products.reduce((acc, curr) =>  curr.id, 0);

  return (
    <div className="pt-3">
      <Row className="mt-2 p-2" style={{ backgroundColor: "#F7F8F9" }}>
        <Col xs={2}>
          <img src="../assets/resim.jpg" />
        </Col>
        <Col xs={7} className="d-flex flex-column">
          <span style={{ fontSize: "0.8em" }}>My Properties Total Value</span>
          <span style={{ fontSize: "1.2em", fontWeight: 600 }}>            
            ${totalAmount}
          </span>
        </Col>
      </Row>
      <Row className="mt-2 p-2" style={{ backgroundColor: "#F7F8F9" }}>
        <Col xs={2}>
          <img src="../assets/resim.jpg" />
        </Col>
        <Col xs={7} className="d-flex flex-column">
          <span style={{ fontSize: "0.8em" }}>Number of Properties</span>
          <span style={{ fontSize: "1.2em", fontWeight: 600 }}>
            {totalProperties}
          </span>
        </Col>
      </Row>
    </div>
  );
}
