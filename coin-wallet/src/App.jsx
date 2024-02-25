import { Container } from "react-bootstrap";
import NavComp from "./components/NavComp";
import "./App.css";
import Amount from "./components/Amount";
import Buttons from "./components/Buttons";
import AssetsButtons from "./components/AssetsButtons";
import Assets from "./components/Assets";
import products from "./components/products.json";
import TotalAssets from "./components/TotalAssets";
import { useEffect, useState } from "react";
import Properties from "./components/Properties";

function App() {
  const [selectedButton, setSelectedButton] = useState("Crypto");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      products.reduce((accumulator, product) => {
        return accumulator + product.amount;
      }, 0)
    );
  }, [products]);

  console.log(totalAmount);

  return (
    <>
      <Container
        className="mt-5"
        style={{
          width: "40vh",
          height: "65vh",
          border: "2px solid #adb5bd",
          borderRadius: "1rem",
        }}
      >
        <NavComp />
        <Amount totalAmount={totalAmount} />
        <Buttons />
        <AssetsButtons
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />

        {(selectedButton === "Crypto" && (
          <div
            className="mt-2"
            style={{
              overflowY: "auto",
              overflowX: "hidden",
              height: "calc(70% - 120px)",
            }}
          >
            {products.map((product) => (
              <Assets product={product} key={product.id} />
            ))}
          </div>
        )) || (<div
            className="mt-2"
            style={{
              overflowY: "auto",
              overflowX: "hidden",
              height: "calc(70% - 120px)",
            }}
          > <TotalAssets totalAmount={totalAmount} /> </div>)}
        <Properties />
      </Container>
    </>
  );
}

export default App;
