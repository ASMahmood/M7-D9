import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Card } from "react-bootstrap";
import { infoCardProps } from "../types/interfaces";

type infoProps = RouteComponentProps & infoCardProps;

function InfoCard(props: infoProps) {
  return (
    <Card className="infoCard">
      <Card.Img variant="top" src={props.info.album.cover_xl} />
      <Card.Body>
        <Card.Title>{props.info.title}</Card.Title>
        <Card.Text>By {props.info.artist.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default withRouter(InfoCard);
