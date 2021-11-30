import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { API_URL } from "./utils/contants";
import axios from "axios";
import { Menus } from "./components";
import { Hasil } from "./components";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      keranjangs: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  masukKeranjang = (value) => {
    const keranjang = {
      name: value.name,
      harga: value.harga,
    };

    axios
      .post(API_URL + "keranjangs", keranjang)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus } = this.state;
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <Col className="mt-3">
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <Row className="overflow-auto menu">
                {menus &&
                  menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                      masukKeranjang={this.masukKeranjang}
                    />
                  ))}
              </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    );
  }
}
