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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the key projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* NurseWav Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NurseWav}
              isProject={true}
              title="NurseWav"
              description="Developed a mobile app addressing alarm fatigue in hospitals. Conducted user research with nurses and designed the user interface using Figma. Implemented data-driven insights to improve nurse-patient interactions, improving overall operational efficiency."
              link="https://github.com/aravindhsharma/NurseWav"
              demo="https://nursewav-app.herokuapp.com/"
            />
          </Col>

          {/* InternPro Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InternPro}
              isProject={true}
              title="InternPro"
              description="Led the development of InternPro, an AI-powered platform for matching interns with opportunities. Managed user feedback and collaborated with developers to implement user-suggested features, enhancing overall user satisfaction."
              link="https://github.com/aravindhsharma/InternPro"
              demo="https://internpro.herokuapp.com/"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I have earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Lean Six Sigma Green Belt Certification */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SixSigma} // You can add an image if needed
              isProject={false}
              title="Lean Six Sigma Green Belt"
              description="Lean Six Sigma Green Belt Certification from the Council of Six Sigma, demonstrating expertise in improving processes and operational efficiencies using data-driven methodologies."
              link="https://example.com/certification-link" // Update with the actual link if available
            />
          </Col>

          {/* Agile & Scrum Certification */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AgileScrum} // You can add an image if needed
              isProject={false}
              title="Agile & Scrum"
              description="Certified in Agile and Scrum methodologies, specializing in managing projects using iterative development practices and cross-functional team collaboration."
              link="https://example.com/certification-link" // Update with the actual link if available
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          My <strong className="purple">Publications</strong>
        </h1>
        <p style={{ color: "white" }}>Here are some of my published papers.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Technology Aided Alert System for Medical Emergency using WSN */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ieee} // Add an image if needed
              isProject={false}
              title="Technology Aided Alert System for Medical Emergency using WSN"
              description="This paper presents a technology-aided alert system for medical emergencies using wireless sensor networks (WSN). The system monitors vital signs and sends alerts in case of anomalies, proposing protocol modifications for improved performance."
              link="https://ieeexplore.ieee.org/document/9214135"
            />
          </Col>

          {/* Technology Aided Waste Management Practices in the Village of Maira, Punjab */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Springer} // Add an image if needed
              isProject={false}
              title="Technology Aided Waste Management Practices in the Village of Maira, Punjab"
              description="This research explores technology-driven waste management practices in rural communities, focusing on the village of Maira, Punjab. The paper discusses waste sorting, recycling technologies, and smart waste level monitoring."
              link="https://link.springer.com/chapter/10.1007/978-981-15-1420-3_162"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
