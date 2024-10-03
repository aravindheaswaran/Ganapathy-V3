import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Skillsets</strong>
            </h1>
            <Container className="about-body">
              <p>
                ✔ Product Development & Strategy: Roadmapping, Feature
                Prioritization, A/B Testing, User Research, Wireframing.
              </p>
              <p>✔ Python, SQL, MySQL, API Integration, and RESTful APIs.</p>
              <p>✔ Data Analytics: Tableau, Power BI, Google Analytics.</p>
              <p>
                ✔ Agile Methodologies: Scrum, Kanban, Sprint Planning, JIRA.
              </p>
              <p>✔ CRM Tools: Salesforce, UiPath.</p>
              <p>
                ✔ Leadership: Cross-functional Team Leadership, Stakeholder
                Engagement, Project Management.
              </p>
              <p>
                ✔ Collaboration Tools: Figma, Airtable, Miro, Notion, Slack,
                Zapier.
              </p>
              <p>
                ✔ Experienced in Product Lifecycle Management (PLM) and
                Data-Driven Decision Making.
              </p>
            </Container>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillsets</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
