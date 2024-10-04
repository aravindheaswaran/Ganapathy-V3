import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Update the project image imports as needed
import NurseWav from "../../Assets/Projects/nursewav.png";
import InternPro from "../../Assets/Projects/internpro.png";
import Ieee from "../../Assets/Projects/ieee.png";
import AgileScrum from "../../Assets/Projects/agilescrum.png";
import Springer from "../../Assets/Projects/springer.png";
import SixSigma from "../../Assets/Projects/sixsigma.png";
import SocialWorkImage1 from "../../Assets/Projects/socialwork1.png";
import SocialWorkImage2 from "../../Assets/Projects/socialwork2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Projects Section */}
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the key projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NurseWav}
              isProject={true}
              title="NurseWav"
              description="Developed a mobile app addressing alarm fatigue in hospitals. Conducted user research and designed the user interface using Figma."
              demo="https://nursewav-app.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InternPro}
              isProject={true}
              title="InternPro"
              description="Led the development of InternPro, an AI-powered platform for matching interns with opportunities."
              demo="https://internpro.herokuapp.com/"
            />
          </Col>
        </Row>

        {/* Certifications Section */}
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I have earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SixSigma}
              isProject={true}
              title="Lean Six Sigma Green Belt"
              description="Lean Six Sigma Green Belt Certification from the Council of Six Sigma."
              demo="https://example.com/certification-link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AgileScrum}
              isProject={true}
              title="Agile & Scrum"
              description="Certified in Agile and Scrum methodologies, focusing on managing projects with iterative development."
              demo="https://example.com/certification-link"
            />
          </Col>
        </Row>

        {/* Publications Section */}
        <h1 className="project-heading">
          My <strong className="purple">Publications</strong>
        </h1>
        <p style={{ color: "white" }}>Here are some of my published papers.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ieee}
              isProject={true}
              title="Technology Aided Alert System for Medical Emergency using WSN"
              description="Published in IEEE Third International Conference on Smart Systems and Inventive Technology (ICSSIT)."
              demo="https://ieeexplore.ieee.org/document/9214135"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Springer}
              isProject={true}
              title="Technology Aided Waste Management Practices in the Village of Maira, Punjab"
              description="Published in ICDSMLA 2019 1st International Conference on Data Science, Machine Learning and Applications."
              demo="https://link.springer.com/chapter/10.1007/978-981-15-1420-3_162"
            />
          </Col>
        </Row>

        {/* Social Work Section */}
        <h1 className="project-heading">
          My <strong className="purple">Social Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is some of my community and volunteer work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocialWorkImage1}
              isProject={false}
              title="ASU Community Outreach"
              description="Collaborated with Arizona State University and the International Students Association (ISA) for community service, including painting and renovating local schools."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocialWorkImage2}
              isProject={false}
              title="Bharath Scouts and Guides"
              description="Played an active role in community service activities, earning the prestigious Rashtrapathi Award for leadership and service."
            />
          </Col>
        </Row>

        {/* Achievements Section */}
        <h1 className="project-heading">
          My <strong className="purple">Achievements</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the achievements I am proud of.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isProject={false}
              title="Rashtrapathi National Award (2016)"
              description="Awarded the prestigious Rashtrapathi National Award as a Bharat Scout and Guide for excellence in service and leadership."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isProject={false}
              title="Best Performer at Hewlett Packard Enterprise"
              description="Recognized for excelling in key performance indicators and customer satisfaction metrics as a Technology Solutions Manager."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
