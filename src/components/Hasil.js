import React, { Component } from "react";
import { Col } from "react-bootstrap";
import TotalBayar from "./TotalBayar";
export default class Hasil extends Component {
  render() {
    return (
      <Col md={3} className="mt-3">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr />
        <TotalBayar />
      </Col>
    );
  }
}
