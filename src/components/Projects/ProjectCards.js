import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Conditionally render image only if imgPath is provided */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.demo && (
          <Button variant="primary" href={props.demo} target="_blank">
            <BiLinkExternal /> &nbsp; {props.isProject ? "Checkout" : "View"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
