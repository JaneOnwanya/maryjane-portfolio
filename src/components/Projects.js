import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
import QHOS from "../Assets/Projects/QHOS.png";
import FB from "../Assets/Projects/FB.png";
import All_dataset from "../Assets/Projects/All_dataset.png";
import EVO from "../Assets/Projects/EVO.png";
import SD1 from "../Assets/Projects/SD1.png";
import SD2 from "../Assets/Projects/SD2.png";
import UC from "../Assets/Projects/UC.png";

function Projects() {
  useEffect(() => {
    document.title = "Onwanya | Portfolio";
  }, []);

  return (
    <div className="projects" id="projects">
      <Container fluid className="project-section">
        <Particle />

        {/* Personal Projects */}
        <Container>
          <h1 className="project-heading">
            Personal <strong className="purple">Projects</strong>
          </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={5} className="project-card">
              <ProjectCard
                images={[QHOS]}
                title="Q-Hospital App"
                description="An online hospital appointment booking system developed to support the Software Engineering course. The system allows patients to schedule and manage appointments efficiently."
                ghLink="https://github.com/owskr/Doctorapp"
              />
            </Col>

            <Col md={5} className="project-card">
              <ProjectCard
                images={[FB]}
                title="Facebook Login Testing"
                description="A Facebook login testing project developed during my internship as a QA Engineer to validate authentication workflows and ensure system reliability."
                ghLink="https://github.com/owskr/TestLogin-FB"
              />
            </Col>

            <Col md={5} className="project-card">
              <ProjectCard
                images={[All_dataset]}
                title="Image Data Management System"
                description="A web-based system for managing large-scale unstructured image datasets, developed and submitted to the AUCC 2024 competition."
                ghLink="https://github.com/maryjjjannee/dataset"
              />
            </Col>
          </Row>
        </Container>

        {/* Company Projects */}
        <Container>
          <h1 className="project-heading">
            Project <strong className="purple">Experience</strong>
          </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={5} className="project-card">
              <ProjectCard
                images={[EVO]}
                title="EVO"
                description="A fully managed, end-to-end digital platform transforming property management by enabling landlords to outsource repairs and maintenance efficiently."
                techStack={["JavaScript", "CSS", "PHP", "Laravel"]}
                contribution="Contributed to CMS development by implementing new features and improving system functionality."
                webLink="https://evo-pm.com/"
              />
            </Col>
            <Col md={5} className="project-card">
              <ProjectCard
                images={[SD1, SD2]}
                title="SD Sealants"
                description="An internal work diary and operational management system for SD Teams, developed in two phases as a responsive web application for desktop and mobile use."
                techStack={["TypeScript", "Next.js", "AWS", "DBeaver", "Tailwind CSS"]}
                contribution="Designed and developed key features to improve workflow efficiency, integration, and scalability."

              />

            </Col>
            <Col md={5} className="project-card">
              <ProjectCard
                images={[UC]}
                title="Unity Coffee"
                description="A digital coffee platform integrating smart self-serve machines with a seamless ordering experience. Contributed to the development of the mobile application for both iOS and Android, supporting ordering, payments, and real-time user interactions."
                techStack={["Typescript", "Expo", "Next.js", "Payload CMS", "Supabase", "Tailwind CSS"]}
                contribution="Led the development of the cross-platform mobile application for iOS and Android. Implemented core features such as order management, payment integration, and performance optimisation to deliver a seamless and scalable user experience."
                iosLink="https://apps.apple.com/gb/app/unity-coffee/id6748644322"
                androidLink="https://play.google.com/store/apps/details?id=com.unitycoffee.app"
              />
            </Col>
          </Row>
        </Container>

      </Container>
    </div>
  );
}

export default Projects;
