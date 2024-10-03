import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Ganapathy Sankarasubramaniyan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/aravindhsharma"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:gsankar6@asu.edu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiOutlineGoogle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ganapathysankarasubramaniyan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
