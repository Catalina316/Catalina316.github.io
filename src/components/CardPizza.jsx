import React from "react";
import { Button, Card } from "react-bootstrap";
import { formateador } from "../utils/formateador";

const CardPizza = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>Ingredientes varios: {props.descripcion}</Card.Text>
        <Card.Text>Precio: ${formateador(props.precio)}</Card.Text>
        <Button variant="primary">Ver más</Button>
        <Button variant="secondary">Añadir</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
