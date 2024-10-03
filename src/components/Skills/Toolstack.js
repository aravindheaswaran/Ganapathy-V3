import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNetlify,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiSlack,
  SiNotion,
  SiAirtable,
  SiMiro,
  SiZapier,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAirtable />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMiro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiZapier />
      </Col>
    </Row>
  );
}

export default Toolstack;
