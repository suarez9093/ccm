import React from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "./components/Product";

function App() {
  return (
    <Container>
      <Row>
        <Col>Header</Col>
      </Row>
      <Row>
        <Product />
      </Row>
    </Container>
  );
}

export default App;
