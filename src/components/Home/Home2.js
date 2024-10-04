import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* About Me Section */}
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Know <span className="purple"> Who I Am</span>
            </h1>
            <p className="home-body">
              I am an experienced{" "}
              <strong className="purple">Product Manager</strong> with a proven
              track record of leveraging Agile methodologies and data-driven
              insights to deliver impactful products. I have expertise in
              managing cross-functional teams, driving product development, and
              executing strategic roadmaps. My skills include
              <strong className="purple">
                {" "}
                Python, SQL, JIRA, Tableau, Power BI
              </strong>
              , and I am passionate about continuous product improvement and
              enhancing user satisfaction through iterative development.
              <br />
              <br />
              Outside of work, I love dancing, exploring new tech trends, and
              challenging myself on thrilling adventures. My resilience and
              determination, shaped by my experience as an athlete, inspire me
              to excel in all endeavors I pursue.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", paddingTop: "40px" }}>
              What Others <span className="purple">Say</span> About Me
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="home-about-description">
            <blockquote className="home-body" style={{ textAlign: "justify" }}>
              <p>
                "I was very impressed with how you managed the situation and
                kept the quality of your output. You managed the delivery,
                quality, and communication very well."
              </p>
              <footer>— Hazel Ducay, Chief Scrum Master, Shell</footer>
            </blockquote>
          </Col>

          <Col md={6} className="home-about-description">
            <blockquote className="home-body" style={{ textAlign: "justify" }}>
              <p>
                "Successful completion within the budget and timelines has been
                possible because of your hard work, dedication, and commitment.
                Continue doing a commendable job!"
              </p>
              <footer>— Somanna T G, CC Lead - Testing, Shell</footer>
            </blockquote>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aravindhsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:gsankar6@asu.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ganapathysankarasubramaniyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
