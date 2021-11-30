import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default class TotalBayar extends Component {
  render() {
    return (
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga : <strong className="float-right mr-2">Rp. {}</strong>
            </h4>
            <Button variant="primary" block className="m-2" size="lg">
              <strong>BAYAR</strong>
            </Button>
            <Button variant="primary" block className="m-2" size="lg">
              <strong>PRINT</strong>
            </Button>
            <Button variant="primary" block className="m-2" size="lg">
              <strong>SAVE</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
