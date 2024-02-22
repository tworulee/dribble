import { Row, Col } from "react-bootstrap";

function AssetsButtons({selectedButton,setSelectedButton}) {

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };



  return (
    <Row className="text-center">
      <Col xs={6} className="d-flex justify-content-center">
        <button
          className=" bg-white"
          style={{
            color: selectedButton === "Crypto" ? "#31d2f2" : "black",
            border: selectedButton === "Crypto" ? "none" : "none",
            borderBottom:
              selectedButton === "Crypto" ? "3px solid #31d2f2" : "3px solid black",
            fontWeight: 600,
            padding: "15px 40px",
          }}
          onClick={() => handleButtonClick("Crypto")}
        >
          Crypto
        </button>
      </Col>
      <Col xs={6} className="d-flex justify-content-center">
        <button
          className="bg-white"
          style={{
            color: selectedButton === "NFTs" ? "#31d2f2" : "black",
            border: selectedButton === "NFTs" ? "none" : "none",
            borderBottom:
              selectedButton === "NFTs" ? "3px solid #31d2f2" : "3px solid black",
            fontWeight: 600,
            padding: "15px 40px",
          }}
          onClick={() => handleButtonClick("NFTs")}
        >
          Assets  
        </button>
      </Col>
    </Row>
  );
}

export default AssetsButtons;
