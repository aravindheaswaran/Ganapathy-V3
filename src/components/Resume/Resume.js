import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Import images for sections
import teachingAssistantImg from "../../Assets/teaching-assistant.png";
import msDegreeImg from "../../Assets/ms-degree.png";
import coreCompetenciesImg from "../../Assets/core-competencies.png";
import achievementsImg from "../../Assets/achievements.png";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>

            <Resumecontent
              title="Product Analyst"
              date="FIS Global · Jan 2024 - Present"
              content={[
                "Led a cross-functional Agile team of 10 professionals to deliver key product features.",
                "Analyzed datasets using Python and automated reporting processes.",
                "Developed Tableau and Power BI dashboards, reducing report generation time by 30%.",
                "Leveraged Google Analytics to increase conversion rates by 25%.",
                "Prioritized product features based on market research, boosting merchant adoption by 15%.",
                "Implemented A/B testing, resulting in a 10% increase in conversion rates.",
              ]}
            />

            <Resumecontent
              title="Product Manager"
              date="W4M.AI · Jun 2024 - Sep 2024"
              content={[
                "Led the development and management of InternPro, an AI-powered internship matching platform.",
                "Collaborated with users and developers to implement user-suggested features, reducing bugs and improving satisfaction.",
                "Automated interview scheduling and performance tracking to enhance operational efficiency.",
                "Utilized project management tools like Slack and Notion for better team collaboration.",
              ]}
            />

            <Resumecontent
              title="Project Manager Intern"
              date="Qbotica · Jan 2024 - May 2024"
              content={[
                "Coordinated daily project tasks and generated regular status reports for stakeholders.",
                "Facilitated risk management and supported cross-functional teams in software development.",
                "Led project meetings and implemented strategies to ensure project success.",
              ]}
            />

            <Resumecontent
              title="Product Manager"
              date="Jewish Healthcare Foundation · Aug 2023 - Dec 2023"
              content={[
                "Led the product design and development of NurseWav, a mobile app to address alarm fatigue among hospital nurses.",
                "Conducted customer interviews and applied UX principles to enhance the app’s usability.",
                "Leveraged business intelligence tools for data-driven decision-making.",
                "Collaborated with stakeholders using Airtable and Miro for efficient project management.",
              ]}
            />

            <Resumecontent
              title="Technology Solutions Manager"
              date="Hewlett Packard Enterprise · Nov 2021 - Jul 2022"
              content={[
                "Recognized as a Top Performer in the first quarter for excellence in customer resolutions.",
                "Collaborated with engineering and product management to improve quality and resolve issues.",
                "Generated comprehensive reports on product quality, feedback trends, and escalation analysis.",
              ]}
            />

            <h3 className="resume-title">Core Competencies</h3>
            <Resumecontent
              content={[
                "Product Development & Strategy: Roadmapping, A/B Testing, User Research, Wireframing",
                "Technologies: Python, SQL, Tableau, Power BI, Google Analytics, MySQL, API Integration",
                "Agile Tools & Project Management: JIRA, Slack, Notion, Airtable, Miro",
                "Leadership & Collaboration: Cross-functional Team Leadership, Project Management, Strategic Communications",
              ]}
              imgPath={coreCompetenciesImg} // Image for Core Competencies
            />
          </Col>

          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Arizona State University"
              date="Aug 2023 - Jul 2024"
              content={["Teaching Assistant: Data-Driven Decision Making"]}
              imgPath={teachingAssistantImg} // Image for Teaching Assistant
            />
            <Resumecontent
              title="Arizona State University"
              date="2024"
              content={["M.S. in Engineering Management, GPA: 4.00"]}
              imgPath={msDegreeImg} // Image for M.S. Degree
            />
            <Resumecontent
              title="Amrita Vishwa Vidyapeetham University"
              date="2019"
              content={[
                "B.Tech in Electronics and Instrumentation Engineering",
                "Secretary of the Sports Club",
                "Live in Labs, a social innovation lab",
              ]}
            />

            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              content={[
                "Rashtrapathi National Award (2016): Awarded the prestigious Rashtrapathi National Award as a Bharat Scout and Guide for excellence in service and leadership.",
                "Best Performer at Hewlett Packard Enterprise: Recognized for excelling in key performance indicators and customer satisfaction metrics as a Technology Solutions Manager.",
                "Winner of Prescott Startup Fund: Secured the prize in the Social Innovation Startup Lab pitch challenge for the NurseWav app.",
              ]}
              imgPath={achievementsImg} // Image for Achievements
            />
          </Col>
        </Row>

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
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:gsankar6@asu.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ganapathysankarasubramaniyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
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

export default Resume;
