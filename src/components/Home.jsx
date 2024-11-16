import React from "react";
import { Col, Row } from "react-bootstrap";
import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Row>
        <Col>
          <CardPizza
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
            nombre="Napolitana"
            descripcion="Tomate, jamón y aceitunas"
            precio={5950}
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            nombre="Pepperoni"
            descripcion="Tomate, pepperoni y choricillo"
            precio={5950}
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            nombre="Margarita"
            descripcion="Crema y albahaca"
            precio={6950}
          ></CardPizza>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardPizza
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            nombre="Vegetariana"
            descripcion="Tomate, pimentón y champiñones"
            precio={5950}
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            nombre="Española"
            descripcion="Jamón, pimentón y choricillo"
            precio={5900}
          ></CardPizza>
        </Col>
        <Col>
          <CardPizza
            imagen="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            nombre="4 quesos"
            descripcion="Queso mozzarella, queso azul, queso parmesano y queso crema"
            precio={6400}
          ></CardPizza>
        </Col>
      </Row>
    </>
  );
};

export default Home;
